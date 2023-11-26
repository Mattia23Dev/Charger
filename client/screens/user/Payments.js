import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Share, Animated } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from 'react'
import { colors } from '../../constants';
import { PanGestureHandler, State, GestureHandlerRootView  } from 'react-native-gesture-handler';

const Payments = ({navigation, route}) => {
    const { user } = route.params;

    const shareContent = async () => {
        try {
          const options = {
            title: 'Condividi con',
            message: 'Ciao, hai il telefono scarico? con noi non più.',
            url: "",
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

  return (
    <GestureHandlerRootView> 
    <View style={styles.container}>
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
        <Text style={{ fontSize: 34, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 4, }}>Credito: {user?.minutiGratis ? user.minutiGratis : 0} minuti</Text>
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
              }}>
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
              }}>
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
                <Text style={{width: '45%', color: '#fff', fontSize: 16}}>Invita gli amici e ottieni 60 minuti di credito</Text>
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
  )
}

export default Payments

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
  }
})