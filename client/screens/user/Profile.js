import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, TextInput, LayoutAnimation, Platform, UIManager } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from 'react'
import { colors } from '../../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native';
import i18next, {languageResources} from '../../locales/i18next';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

const Profile = ({navigation, route}) => {
    //const { user } = route.params;
    const {t} = useTranslation();
    const [user, setUser] = useState({});
    const [processing, setProcessing] = useState(false);
    const animation = useRef(null);
    const [nome, setNome] = useState(user?.name ? user.name : "");
    const [cognome, setCognome] = useState(user?.surname ? user.surname : "");
    const [email, setEmail] = useState(user?.email ? user.email : "");
    const [telefono, setTelefono] = useState(user?.phone ? user.phone : "");

    const [via, setVia] = useState(user?.via ? user.via : "");
    const [comune, setComune] = useState(user?.comune ? user.comune : "");
    const [cap, setCap] = useState(user?.cap ? user.cap : "");
    const [pIva, setPIva] = useState(user?.pIva ? user.pIva : "");
    const [cF, setCF] = useState(user?.cf ? user.cf : "");
    const [sdi, setSDI] = useState(user?.sdi ? user.sdi : "");

    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
      async function fetch(){
        try {
          const value = await AsyncStorage.getItem("authUser");
          const user = JSON.parse(value); 
          setUser(user); 

          setNome(user?.name ? user.name : "");
          setCognome(user?.surname ? user.surname : "");
          setEmail(user?.email ? user.email : "");
          setTelefono(user?.phone ? user.phone : "");
      
          setVia(user?.via ? user.via : "");
          setComune(user?.comune ? user.comune : "");
          setCap(user?.cap ? user.cap : "");
          setPIva(user?.pIva ? user.pIva : "");
          setCF(user?.cf ? user.cf : "");
          setSDI(user?.sdi ? user.sdi : "");
        } catch (error) {
          console.log(error);
        }
      }

      fetch();
    }, [])

    _storeData = async (user) => {
      try {
        console.log('Updating user data:', user);
        setUser(user);
        navigation.setParams({ user: userData });
        AsyncStorage.setItem("authUser", JSON.stringify(user));
        setTimeout(() => {
          setProcessing(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    const toggleSection = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
      };

      const userData = {
        name: nome,
        surname: cognome,
        email: email,
        phone: telefono,
        via: via,
        comune: comune,
        cap: cap,
        pIva: pIva,
        cf: cF,
        sdi: sdi,
      }

      const updateAccount = () => {

        setProcessing(true);
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
          redirect: 'follow',
        };

        const fetchURL = `${network.serverip}/update-user?id=${user._id}`;

        fetch(fetchURL, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.success == true) {

              console.log('RISULTATO:' + JSON.stringify(result.data));
              _storeData(result.data);
            } else {
              console.log(result.data);
              setTimeout(() => {
                setProcessing(false);
              }, 2000);
            }
          })
          .catch((error) => {
            console.log("error", error);
            setProcessing(false);
          });
      }; 
      
      const [chooseLang, setChooseLang] = useState(false);

      const changeLng = lng => {
        i18next.changeLanguage(lng);
        setProcessing(false);
      };
    
      const handleLanguageSelection = async (language) => {
        setProcessing(true);
        setChooseLang(false);
        await AsyncStorage.setItem('selectedLanguage', language);
        changeLng(language);
      };
    
  return (
    <View style={styles.container}>
      {processing && (
        <View style={styles.popupShadow}>
            <ActivityIndicator size="large" color={colors.green} />
        </View>
      )}
      {chooseLang && (
        <View style={styles.popupShadow}>
           <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 0,
                paddingBottom: 20,
                borderRadius: 10,
                elevation: 5, 
                shadowColor: 'black', // Ombra su iOS
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                width: '80%',
           }}>
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
                  onPress={() => setChooseLang(false)}>
                    <Ionicons name='close' size={20} color={colors.dark} />
                  </TouchableOpacity>
                  <Text style={{color: colors.light, fontSize: 18, fontWeight: 600, fontFamily: 'poppins_600'}}>{t('cambia-lingua-pop')}</Text>
              </View>
              <TouchableOpacity
                  style={styles.languageButton}
                  onPress={() => handleLanguageSelection('pt')}
              >
                  <Text style={styles.buttonText}>Português</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.languageButton}
                  onPress={() => handleLanguageSelection('en')}
              >
                  <Text style={styles.buttonText}>English</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.languageButton}
                  onPress={() => handleLanguageSelection('it')}
              >
                  <Text style={styles.buttonText}>Italiano</Text>
              </TouchableOpacity>    
           </View>  
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
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', marginTop: 0, fontFamily: 'poppins_600' }}>{t('profilo')}</Text>
        <TouchableOpacity style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.green,
          position: 'absolute',
          right: 25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 40,
        }} onPress={() => setChooseLang(true)}>
          <Text style={{fontFamily: 'poppins_600', color: colors.green, fontSize: 13}}>{t("cambia-lingua")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={{
            width: '85%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }} onPress={toggleSection}>
            <View>
                <Text style={styles.textStyle}>{t('contatti')}</Text>   
            </View>
            <Ionicons name={isExpanded ? 'arrow-up' : 'arrow-down'} size={25} />
        </TouchableOpacity>
        {isExpanded && (
        <View style={styles.contatti}>
          <TextInput
            style={styles.input}
            placeholder={t('nome')}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={t('cognome')}
            value={cognome}
            onChangeText={(text) => setCognome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={t('email')}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={t('cellulare')}
            value={telefono}
            onChangeText={(text) => setTelefono(text)}
          />
        </View>
      )}
        <TouchableOpacity style={{
            width: '85%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',            
        }} onPress={toggleSection}>
            <View>
                <Text style={styles.textStyle}>{t('dati-fatturazione')}</Text>
            </View>
            <Ionicons name={isExpanded ? 'arrow-up' : 'arrow-down'} size={25} />
        </TouchableOpacity>
        {!isExpanded && (
        <View style={styles.contatti}>
            <ScrollView style={{width: '100%', display: 'flex'}} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={styles.input}
                placeholder={t('indirizzo')}
                value={via}
                onChangeText={(text) => setVia(text)}
            />
            <TextInput
                style={styles.input}
                placeholder={t('citta')}
                value={comune}
                onChangeText={(text) => setComune(text)}
            />
            <TextInput
                style={styles.input}
                placeholder={t('cap')}
                value={cap}
                onChangeText={(text) => setCap(text)}
            />
            <TextInput
                style={styles.input}
                placeholder={t('piva')}
                value={pIva}
                onChangeText={(text) => setPIva(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="C.F."
                value={cF}
                onChangeText={(text) => setCF(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="SDI"
                value={sdi}
                onChangeText={(text) => setSDI(text)}
            />
            </ScrollView>
        </View>
      )} 
        <TouchableOpacity
          onPress={updateAccount}
                style={styles.bottomBody}
                >
            <Text
                    style={{fontSize: 20, marginHorizontal: 5, color: colors.green, fontFamily: 'poppins_600'}}>
                        {t('salva')}
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

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
    height: '87%',
    position: 'fixed',
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  },
  textStyle: {
    width: '100%',
    paddingHorizontal: 20,
    color: colors.muted,
    textAlign: 'center',
    fontSize: 22,
    //fontWeight: 600,
    marginBottom: 30,
    marginTop: 30,
    fontFamily: 'poppins_500'
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
    backgroundColor: colors.dark,
    marginTop: 8,
    paddingVertical: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: colors.light
  },
  bottomBody: {
    width: '90%',
    backgroundColor: colors.dark,
    height: 60,
    borderRadius: 70,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  languageButton: {
    backgroundColor: colors.muted,
    padding: 10,
    marginVertical: 10,
    borderRadius: 30,
    width: 200,
    alignItems: 'center',
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
  buttonText: {
    color: colors.light,
    fontSize: 16,
    fontFamily: 'poppins_500'
  },
  popupShadow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 15,
  },
})