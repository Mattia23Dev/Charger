import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Share, Animated, ActivityIndicator, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState, useEffect } from 'react'
import { colors, network } from '../../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PanGestureHandler, State, GestureHandlerRootView, TextInput  } from 'react-native-gesture-handler';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';

const Payments = ({navigation, route}) => {
    const { user } = route.params;
    const publishableKey = 'pk_test_51OIbqoCxNUIpLwF5d1GDcsX6WWIWdvn29KbQcT7qrfWNMGLLMb7byQXtydcYrdNjcm9uoZnyYkM2WciEGIPFhMA600Td4jGLRe';

    const [cards, setCards] = useState([]);
    const { initPaymentSheet, presentPaymentSheet, confirmPaymentSheetPayment } = useStripe();
    const [load, setLoad] = useState(true);
    const [ephKey, setEphKey] = useState();
    const [paymentInProgress, setPaymentInProgress] = useState(false);  
    const [clientSecret, setClientSecret] = useState();
    const [setIntent, setSetIntente] = useState();
    const [customerId, setCustomerId] = useState();
  
    const fetchPaymentSheetParams = async () => {
      const response = await fetch(`${network.serverip}/payment-sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          name: user.name + ' ' + user.surname,
        }),
      });
      const { setupIntent, ephemeralKey, customer , clientSecret} = await response.json();

      setEphKey(ephemeralKey);
      setSetIntente(setupIntent);
      setClientSecret(clientSecret);
      setCustomerId(customer);

      const storedPaymentDetailsString = await AsyncStorage.getItem('paymentDetails');
      const storedPaymentDetails = JSON.parse(storedPaymentDetailsString);
      setCards(storedPaymentDetails);
      console.log(storedPaymentDetails);
  
      return {
        setupIntent,
        ephemeralKey,
        customer,
        clientSecret,
      };
    };
  
    const initializePaymentSheet = async () => {
      const {
        setupIntent,
        ephemeralKey,
        customer,
        clientSecret,
      } = await fetchPaymentSheetParams();
  
      const { error } = await initPaymentSheet({
        merchantDisplayName: "Mattia Noris",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        setupIntentClientSecret: setupIntent,
        allowsDelayedPaymentMethods: true,
        customFlow: true,
        applePay: {
          merchantCountryCode: "IT"
        },
      });
      if (!error) {
        setLoad(false);
      } else {
        console.log(error)
      }
    };

    const openPaymentSheet = async () => {
      const { error, paymentOption  } = await presentPaymentSheet({clientSecret: clientSecret});
  
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else {
        setLoad(true);
        try {

          const { error, paymentMethod } = await confirmPaymentSheetPayment();
          console.log(paymentOption);

          if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
          } else {
            Alert.alert(
              'Success',
              'Your order is confirmed!'
            );
          }
          if (paymentOption) {
            const cardDetails = {
              last4: paymentOption.label,
              created: new Date(),
            };
      
            const response = await fetch(`${network.serverip}/save-payment-details`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: user._id,
                customerId: customerId,
                setupIntentId: setIntent.id,
                ephemeralKey: ephKey,
                ...cardDetails,
              }),
            });
      
            if (response.ok) {
              console.log('Success', 'Your payment method is successfully set up for future payments!');
              const paymentDetails = [{
                customerId: customerId,
                last4: paymentOption.label,
              }];
              
              const paymentDetailsString = JSON.stringify(paymentDetails);
              
              await AsyncStorage.setItem('paymentDetails', paymentDetailsString);
              setCards(paymentDetails);
              setLoad(false);
            } else {
              const data = await response.json();
              console.error('Errore:', data.message);
              Alert.alert('Error', 'Failed to save payment details. Please try again.');
            }
          } else {
            console.log(paymentMethod, 'OPZIONE PAGAMENTO: ' + paymentOption);
          }
      } catch (error) {
        console.error('Errore:', error.message);
        Alert.alert('Error', 'An error occurred while processing the payment. Please try again.');
      }
      }
    }; 
  
    useEffect(() => {
      initializePaymentSheet();
    }, []);

    const shareContent = async () => {
        try {
          const options = {
            title: 'Condividi con',
            message: 'Iscriviti e inserisci il codice ' + user?.shareCode + ' per ottenere 15 minuti di ricarica gratis.',
            url: "https.mattianoris.com",
          };
          await Share.share(options);
        } catch (error) {
          console.log('Errore nella condivisione:', error.message);
        }
      };

      const translateY = useRef(new Animated.Value(0)).current;

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationY: translateY } }],
        { useNativeDriver: false }
    );

    const onHandlerStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
        Animated.spring(translateY, {
            toValue: event.nativeEvent.translationY > 0 ? 0 : -250,
            useNativeDriver: false,
        }).start();
        }
    };

    const handleNavigate = () => {
      navigation.navigate("addcard");
    }

    const [promoCodePopup, setPromoCodePopup] = useState(false);
    const [loading, setLoading] = useState(false);


  return (
    <StripeProvider
    publishableKey={publishableKey}
    urlScheme="your-url-scheme"
    merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
    >
    {load && (
        <View style={styles.popupShadow}>
          <ActivityIndicator size="large" color={colors.green} />
        </View>
    )}
    <GestureHandlerRootView> 
        <View style={styles.container}>
                {promoCodePopup && (
                  <View style={styles.popupShadow}>
                    <PromoPopup 
                    setPopupPromo={setPromoCodePopup} setLoading={setLoading} user={user} navigation={navigation} />
                  </View>
                )}  
                {loading && (
                  <View style={styles.popupShadow}>
                    <ActivityIndicator size="large" color={colors.green} />
                  </View>  
                )}
          <View style={styles.topContainer}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 20,
              top: 35,
            }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons
                name="arrow-back-circle-outline"
                size={30}
                color={colors.light}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 30, }}>Pagamenti</Text>
            <Text style={{ fontSize: 34, textAlign: 'center', color: colors.green, fontWeight: 500, marginTop: 4, }}>Credito: {user?.minuti ? user.minuti : 0} minuti</Text>
          </View>
          <View style={styles.bodyContainer}>
                <View style={{
                        borderRadius: 30,
                        width: '90%',
                        paddingVertical: 15,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: 30,
                        marginLeft: 0,
                        flexDirection: 'row',
                        width: '90%'
                  }}>
                    <Ionicons
                    name="card-outline"
                    color={colors.dark}
                    size={28}/>
                    <Text style={{color: colors.dark, fontWeight: 500, marginLeft: 20, fontSize: 22, textAlign: 'center'}}>Metodi di pagamento</Text>
                </View>
                <View style={styles.faq}>
                  <ScrollView 
                  contentContainerStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxHeight: 90,                    
                  }}
                  style={{

                  }}>
                    {cards && cards.map((card, index) => (
                      <View style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: colors.dark,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        marginVertical: 5,
                      }} key={index}>
                      <Ionicons
                          name="card-outline"
                          color={colors.light}
                          size={20}/>
                        <Text style={{color: colors.green}}>{card.last4}</Text>
                      </View>  
                    ))}
                  </ScrollView>
                    <TouchableOpacity style={{
                          borderRadius: 30,
                          width: '40%',
                          borderColor: colors.orange,
                          borderWidth: 1.6,
                          borderStyle: 'dashed',
                          paddingVertical: 15,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          paddingHorizontal: 30,
                          marginLeft: 0,
                          flexDirection: 'row',
                          width: '90%'
                    }}
                    onPress={openPaymentSheet}>
                      <Ionicons
                      name="add-outline"
                      color={colors.orange}
                      size={25}/>
                      <Text style={{color: colors.orange, fontWeight: 500, marginLeft: 20, fontSize: 18, textAlign: 'center'}}>Aggiungi carta</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                        borderRadius: 30,
                        width: '90%',
                        paddingVertical: 15,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: 30,
                        marginLeft: 0,
                        flexDirection: 'row',
                        width: '90%'
                  }}>
                    <Ionicons
                    name="pricetag"
                    color={colors.dark}
                    size={28}/>
                    <Text style={{color: colors.dark, fontWeight: 500, marginLeft: 20, fontSize: 22, textAlign: 'center'}}>Promozioni attivate</Text>
                </View>
                <View style={styles.faq}>
                  <TouchableOpacity style={{
                        borderRadius: 30,
                        width: '40%',
                        borderColor: colors.orange,
                        borderWidth: 1.6,
                        borderStyle: 'dashed',
                        paddingVertical: 15,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: 0,
                        paddingHorizontal: 30,
                        flexDirection: 'row',
                        width: '90%'
                  }}
                  onPress={() => setPromoCodePopup(true)}>
                    <Ionicons
                    name="add-outline"
                    color={colors.orange}
                    size={25}/>
                    <Text style={{color: colors.orange, fontWeight: 500, marginLeft: 20, fontSize: 18, textAlign: 'center'}}>Aggiungi codice sconto</Text>
                  </TouchableOpacity>
                </View>
                <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                    onHandlerStateChange={onHandlerStateChange}
                    >
                    <Animated.View
                        style={[styles.containerExpand, { transform: [{ translateY }] }]}
                    >
                      <View style={{
                            borderRadius: 30,
                            width: '90%',
                            paddingVertical: 15,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            paddingHorizontal: 30,
                            marginLeft: 0,
                            flexDirection: 'row',
                        }}>
                        <Ionicons
                        name="cash-outline"
                        color={colors.dark}
                        size={28}/>
                        <Text style={{color: colors.dark, fontWeight: 500, marginLeft: 20, fontSize: 22, textAlign: 'center'}}>Transazioni</Text>
                      </View>
                    </Animated.View>
                </PanGestureHandler>
                <View style={styles.bottomBody}>
                    <Text style={{width: '45%', color: colors.green, fontSize: 16}}>Invita gli amici e ottieni 60 minuti di credito</Text>
                    <TouchableOpacity
                    onPress={shareContent}
                    style={{
                        borderRadius: 30,
                        width: '40%',
                        backgroundColor: colors.light,
                        paddingVertical: 13,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                        flexDirection: 'row'
                    }}
                    >
                        <Ionicons
                            name="share"
                            size={25}
                            color={colors.dark}
                            />
                        <Text
                        style={{fontSize: 18, marginHorizontal: 5, color: 'black', fontWeight: 600}}>
                            Invita
                        </Text>
                    </TouchableOpacity>
                </View>
          </View>
        </View>        
    </GestureHandlerRootView>
    </StripeProvider>
  )
}

export default Payments

const PromoPopup = ({setPopupPromo, setLoading, user, navigation}) => {

  const [promoCode, setPromoCode] = useState("");

  _storeData = async (user) => {
    try {
      console.log('Updating user data:', user);
      //setUser(user);
      navigation.setParams({ user: user });
      AsyncStorage.setItem("authUser", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendPromo = async () => {
    if (promoCode == "" || promoCode.length < 6 || promoCode.length > 0) {
      Alert.alert("Il codice deve avere 6 cifre");
      return
    }
    setLoading(true);
      try {
        const response = await fetch(network.serverip+'/send-promocode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            promoCode: promoCode,
            id: user._id,
          }),
        });
    
        if (!response.ok) {
          const data = await response.text();
          console.error('Errore:', data.message);
          setLoading(false);
        } else {
          const data = await response.json();
          console.log('Risposta:', data.updatedUser);
          _storeData(data.updatedUser);
          setLoading(false);
          setPopupPromo(false);
        }
      } catch (error) {
        console.error('Errore nella richiesta:', error.message);
        setLoading(false);
      }
  }

  return (
    <View style={styles.popupFilter}>
      <View style={styles.topPopup}>
        <TouchableOpacity style={{
          backgroundColor: colors.light,
          width: 25,
          height: 25,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 15,
          top: 20,
        }} 
        onPress={() => setPopupPromo(false)}>
          <Ionicons name='close' size={20} color={colors.dark} />
        </TouchableOpacity>
        <Text style={{color: colors.light, fontSize: 22, fontWeight: 600,}}>Inserisci il coupon</Text>
      </View>
      <View style={styles.bodyFilter}>
        <View style={styles.filterItem}>
          <TextInput
            style={styles.input}
            value={promoCode}
            onChangeText={(text) => setPromoCode(text)}
            autoCapitalize="characters"
          />
        </View>
      </View>
      <View style={{
        justifyContent: 'center',
        width: '100%',
        alignItems:'center',
        display: 'flex'
      }}>
        <TouchableOpacity style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: colors.orange,
          borderRadius: 30,
          paddingVertical: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleSendPromo}>
          <Text style={{color: colors.light, fontWeight: 500, fontSize: 18}}>CONFERMA</Text>
        </TouchableOpacity>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popupShadow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  container: {
    backgroundColor: colors.dark,
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 40,
    position: 'relative',
    height: 80,
    marginBottom: 50,
  },
  bodyContainer: {
    backgroundColor: colors.light,
    padding: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '80%',
    position: 'fixed',
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    position: 'relative'
  },
  textStyle: {
    width: '100%',
    paddingHorizontal: 20,
    color: colors.muted,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 30,
    marginTop: 20,
  },
  faq: {
    display: 'flex',
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  bottomBody: {
    width: '100%',
    backgroundColor: colors.dark,
    height: 90,
    borderRadius: 70,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    zIndex: 10
  },
  containerExpand: {
    height: 250,
    width: '100%',
    backgroundColor: colors.light,
    zIndex: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  popupFilter: {
    backgroundColor: 'white', // Colore di sfondo del popup
    padding: 0,
    paddingBottom: 20,
    borderRadius: 10,
    elevation: 5, // Ombra su Android
    shadowColor: 'black', // Ombra su iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '80%',
  },
  topPopup: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    position: 'relative',
  },
  bodyFilter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  filterItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingVertical: 10,
  },
  input: {
    width: '100%',
    backgroundColor: colors.light,
    borderColor: colors.dark,
    borderWidth: 1.2,
    borderStyle: 'dashed',
    marginTop: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    color: colors.dark,
    fontFamily: 'poppins_500',
    fontSize: 16
  },
})