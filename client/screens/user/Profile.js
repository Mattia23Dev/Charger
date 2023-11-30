import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, TextInput, LayoutAnimation, Platform, UIManager } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from 'react'
import { colors } from '../../constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

const Profile = ({navigation, route}) => {
    //const { user } = route.params;
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
    console.log(user);

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
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 0, }}>Profilo</Text>
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
                <Text style={styles.textStyle}>Contatti</Text>   
            </View>
            <Ionicons name={isExpanded ? 'arrow-up' : 'arrow-down'} size={25} />
        </TouchableOpacity>
        {isExpanded && (
        <View style={styles.contatti}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cognome"
            value={cognome}
            onChangeText={(text) => setCognome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefono"
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
                <Text style={styles.textStyle}>Dati di fatturazione</Text>
            </View>
            <Ionicons name={isExpanded ? 'arrow-up' : 'arrow-down'} size={25} />
        </TouchableOpacity>
        {!isExpanded && (
        <View style={styles.contatti}>
            <ScrollView style={{width: '100%', display: 'flex'}} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={styles.input}
                placeholder="Via"
                value={via}
                onChangeText={(text) => setVia(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Comune"
                value={comune}
                onChangeText={(text) => setComune(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Cap"
                value={cap}
                onChangeText={(text) => setCap(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="P.IVA"
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
                    style={{fontSize: 20, marginHorizontal: 5, color: colors.green}}>
                        Salva
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
    zIndex: 15,
  },
})