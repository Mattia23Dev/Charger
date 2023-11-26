import { View, Text, TouchableOpacity, StyleSheet, Platform, UIManager, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from 'react'
import { colors } from '../../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormProvider, useForm } from 'react-hook-form'
import LottieView from 'lottie-react-native'
import CreditCardForm, { Button, FormModel } from 'rn-credit-card'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

const AddCard = ({navigation, route}) => {
    //const { user } = route.params;
    const [user, setUser] = useState({});
    const [cardNumber, setCardNumber] = useState("");
    const [scadenza, setScadenza] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardHolder, setCardHolder] = useState("");

    const handleCreditCardChange = (formData) => {
        console.log(formData);
      };

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

      function onSubmit(model) {
        Alert.alert('Success: ' + JSON.stringify(model, null, 2));
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
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CreditCardForm
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
          />
        </KeyboardAvoidingView>
        <View style={styles.bottomBody}>
            <Text style={{color: colors.muted}}>
                Aggiungendo questa carta autorizzo NextaCharge a inviare istruzioni all'istituto emittente per processare
                i pagamenti in accordo con i termini e condizioni generali in essere con NextaCharge.
            </Text>
            {formState.isValid && (
            <Button
                style={styles.bottomButton}
                title={'AGGIUNGI CARTA'}
                onPress={handleSubmit(onSubmit)}
            />
            )}            
        </View>

        </SafeAreaView>
        </FormProvider>
    </View>
  )
}

export default AddCard

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
    zIndex: 10,
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
  }
})