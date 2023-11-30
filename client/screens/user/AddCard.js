import { View, Text, TouchableOpacity, StyleSheet, Platform, UIManager, SafeAreaView, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from 'react'
import { colors, network } from '../../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormProvider, useForm } from 'react-hook-form'
import CreditCardForm, { Button, CardFields, FormModel } from 'rn-credit-card'
import { CardForm, StripeProvider } from '@stripe/stripe-react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import LottieView from 'lottie-react-native';
import animationLoad from './assets/loading.json';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

const publishableKey = 'pk_test_51N1TzKKy8OcUrFfrGTKEGh0HfSc8ZzobBjnfpmOsakeUgPwXTbzEWq0KfRvBsyhwpdll82kjjIdmRyItCFWR2k7H00zS0JO6Zt';

const AddCard = ({navigation, route}) => {
    const [user, setUser] = useState({});
    const [isReady, setIsReady] = useState(false);
    const [processing, setProcessing] = useState(false);

    const formMethods = useForm({
        // to trigger the validation on the blur event
        mode: 'onBlur',
        defaultValues: {
          holderName: '',
          cardNumber: '',
          expiration: '',
          cvv: '',
        },
      });
      const { handleSubmit, formState } = formMethods;

      const closeanimation = () => {
        setTimeout(() => {
          setProcessing(false);
        }, 3000);
      }

     const onSubmit = async (model) => {
      setProcessing(true);
      console.log('ok')
      /*const cardParams = {
        number: model.cardNumber,
        expMonth: parseInt(model.expiration.split('/')[0], 10),
        expYear: parseInt(model.expiration.split('/')[1], 10),
        cvc: model.cvv,
      };

        const { token } = await stripe.createToken('card', cardParams);
        const data = {
          email: user.email,
          model,
          tokenId: token.id,
        }
        fetch(network.serverip+'/create-payment-save-card', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          Alert.alert('Success: ' + JSON.stringify(data, null, 2));
        })
        .catch(error => {
          console.error('Error:', error);
        });*/
        closeanimation();
      }

    useEffect(() => {
      async function fetch(){
        try {
          const value = await AsyncStorage.getItem("authUser");
          const user = JSON.parse(value); 
          setUser(user); 
        } catch (error) {
          console.log(error);
        }
      }

      fetch();
    }, []);
    
  return (
    <View style={styles.container}>
      {processing && (
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
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 0, }}>Aggiungi Carta</Text>
      </View>
      <FormProvider {...formMethods}>
      <SafeAreaView style={styles.bodyContainer}>
        <View
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {/*<CreditCardForm
            LottieView={LottieView}
            horizontalStart={false}
            inputColors={{
                focused: '#080F9C',
                errored: '#B00020',
                regular: '#B9C4CA',
              }}
            overrides={{
              labelText: {
                marginTop: 30,
              },
            }}
          />*/}
          <StripeProvider
            publishableKey={publishableKey}
            urlScheme="your-url-scheme"
            >
            <PaymentScreen2 email={user.email} setIsReady={setIsReady} id={user._id} />
          </StripeProvider>  
        </View>
        <View style={styles.bottomBody}>
            <Text style={{color: colors.muted}}>
                Aggiungendo questa carta autorizzo NextaCharge a inviare istruzioni all'istituto emittente per processare
                i pagamenti in accordo con i termini e condizioni generali in essere con NextaCharge.
            </Text>
            <Button
                disabled={!isReady}
                style={styles.bottomButton}
                title={'AGGIUNGI CARTA'}
                onPress={handleSubmit}
            />           
        </View>

        </SafeAreaView>
        </FormProvider>
    </View>
  )
}

export default AddCard

function PaymentScreen({email, setIsReady, id}) {
  const { confirmPayment, initPaymentSheet, presentPaymentSheet } = useStripe();
  const [clientSecret, setClientSecret] = useState(''); 
  const [cardDetails, setCardDetails] = useState({});
  console.log(clientSecret);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [ok, setOk] = useState(false);


  const fetchClientSecret = async () => {
    try {
      const response = await fetch(network.serverip + "/create-payment", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), 
      });
      const data = await response.json();
      console.log(data);
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const confirmPaymentBack = async (paymentMethodId) => {
    console.log(paymentMethodId);
    try {
      const response = await fetch(network.serverip+'/confirm-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethodId,
          paymentIntentId: paymentIntentId,
          id: id,
          cardDetails: cardDetails,
        }),
      });

      const result = await response.json();
      console.log(result);

      setPaymentInProgress(false);
      setOk(true);

    } catch (error) {
      console.log(error);
      setPaymentInProgress(false);
    }
  }

  const handlePayment = async () => {
    setPaymentInProgress(true);
    try {
      const confirmPaymentResponse = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        billingDetails: {
          email: email,
        },
      });

      const paymentMethodId = confirmPaymentResponse.paymentIntent.paymentMethodId;;
      console.log('paymentMethodId:', paymentMethodId);
      confirmPaymentBack(paymentMethodId);

      console.log('Pagamento riuscito con il metodo:', paymentMethodId);
    } catch (error) {
      console.error('Errore nel pagamento:', error);
      setPaymentInProgress(false);
    }
  };

  return (
    <>
    <CardField
      postalCodeEnabled={true}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: colors.muted,
        textColor: colors.light,
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        if (cardDetails.complete) {
          setIsReady(true);
          setCardDetails(cardDetails);
        }
        console.log('cardDetails', cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
    </>
  );
}

function PaymentScreen2({email, setIsReady, id}) {
  const { confirmPayment, initPaymentSheet, presentPaymentSheet } = useStripe();
  const [clientSecret, setClientSecret] = useState(''); 
  const [cardDetails, setCardDetails] = useState({});
  console.log(clientSecret);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [ok, setOk] = useState(false);


  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${network.serverip}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { setupIntent, ephemeralKey, customer } = await response.json();

    return {
      setupIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      setupIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      setupIntentClientSecret: setupIntent,
    });
    if (!error) {
      //setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your payment method is successfully set up for future payments!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <>
      <Button
        variant="primary"
        title="Set up"
        onPress={openPaymentSheet}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 0,
  },
  bodyContainer: {
    paddingTop: 20,
    backgroundColor: colors.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '82%',
    position: 'fixed',
    bottom: 0,
    top: 60,
    zIndex: 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    position: 'relative'
  },
  avoider: {
    width: '90%',
    marginTop: -40,
  },
  textStyle: {
    width: '100%',
    paddingHorizontal: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 30,
    marginTop: 30,
  },
  contatti: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: '85%',
    backgroundColor: '#ababab',
    marginTop: 8,
    paddingVertical: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: '#fff'
  },
  bottomBody: {
    width: '90%',
    height: 60,
    borderRadius: 70,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 155,
    zIndex: 1,
  },
  bottomButton: {
    width: '90%',
    backgroundColor: colors.dark,
    height: 60,
    borderRadius: 70,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popupShadow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  cardform: {
  height: 200,
  width: '95%',
  },
})