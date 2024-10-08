import MapView, {Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useRef, useState, useEffect } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView, TextInput, TouchableWithoutFeedback, Switch } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import effect from '../../assets/imageeffect.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import close from './assets/close.png';
import { Ionicons } from "@expo/vector-icons";
import { colors, network } from '../../constants';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';
import logo from '../../assets/charger-logo.png'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useTranslation} from 'react-i18next';
import { StripeProvider, confirmSetupIntent  } from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';

const stationsData = [
  { 
    id: '1',
    coordinate: { latitude: 38.7174, longitude: -9.1306 },
    title: 'Chiado',
    status: 'online',
    address: 'Rua do Carmo, 1200-092 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 0, // Numeri casuali da 0 a 8
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '2',
    coordinate: { latitude: 38.7193, longitude: -9.1372 },
    title: 'Rossio',
    status: 'offline',
    address: 'Praça Dom Pedro IV, 1100-026 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 4,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '3',
    coordinate: { latitude: 38.7121, longitude: -9.1387 },
    title: 'Sé de Lisboa',
    status: 'online',
    address: 'Largo da Sé, 1100-585 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 8,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '4',
    coordinate: { latitude: 38.7274, longitude: -9.1455 },
    title: 'Jardim da Estrela',
    status: 'online',
    address: 'Praça da Estrela, 1200-667 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 7,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '5',
    coordinate: { latitude: 38.7526, longitude: -9.1536 },
    title: 'Parque das Nações',
    status: 'offline',
    address: 'Passeio das Tágides, 1990-280 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 3,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '6',
    coordinate: { latitude: 38.7302, longitude: -9.1227 },
    title: 'LX Factory',
    status: 'online',
    address: 'Rua Rodrigues de Faria, 103, 1300-501 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 0,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '7',
    coordinate: { latitude: 38.7322, longitude: -9.1568 },
    title: 'Museu Nacional do Azulejo',
    status: 'offline',
    address: 'R. da Madre de Deus, 4, 1900-312 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 2,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '8',
    coordinate: { latitude: 38.7141, longitude: -9.1398 },
    title: 'Elevador de Santa Justa',
    status: 'online',
    address: 'Rua do Ouro, 1100-084 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 4,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '9',
    coordinate: { latitude: 38.7447, longitude: -9.1269 },
    title: 'Oceanário de Lisboa',
    status: 'online',
    address: 'Esplanada Dom Carlos I, 1990-005 Lisboa',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 7,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  },
  { 
    id: '10',
    coordinate: { latitude: 38.7263, longitude: -9.1487 },
    title: 'Cristo Rei',
    status: 'offline',
    address: 'Praceta do Cristo Rei, 2800-058 Almada',
    image: 'https://www.theflorentine.net/wp-content/uploads/2022/03/locale_marcobadiani_38-1024x683.jpg', // Immagine casuale da Lorem Picsum
    numberPowerBank: 8,
    description: "Luna Caffè è un accogliente angolo di relax immerso in un'atmosfera incantata. Le pareti sono dipinte in tonalità calde di blu e oro, con dettagli che ricordano la notte stellata. La luce soffusa delle lampade a sospensione crea un'atmosfera magica, mentre il delicato profumo di caffè avvolge gli avventori non appena varcano la soglia. Il bancone del bar è adornato da una selezione di dolci artigianali, con colori e sapori che stimolano i sensi. La sala principale è arredata con comode poltrone e divani, perfetti per chi desidera leggere un libro o lavorare in un ambiente tranquillo. Le pareti sono decorate con opere d'arte locali, offrendo una vetrina alle espressioni creative della comunità. Durante la sera, il locale si trasforma in un luogo di ritrovo per gli amanti della musica dal vivo e dell'arte. Eventi settimanali presentano artisti locali, creando un ambiente vivace e stimolante. Luna Caffè è più di un semplice caffè; è un rifugio incantevole dove la creatività e la buona compagnia si mescolano in una miscela irresistibile."
  }
]

export default function Home({navigation, route}) {
  const {t} = useTranslation();
  const [currentTab, setCurrentTab] = useState("Home");
  const [user, setUser] = useState({});
  const [card, setCard] = useState();

  const retrieveUser = async () => {
    try {
      const userString = await AsyncStorage.getItem('authUser');
      const storedPaymentDetailsString = await AsyncStorage.getItem('paymentDetails');
      const storedPaymentDetails = JSON.parse(storedPaymentDetailsString);
      setCard(storedPaymentDetails);
      if (userString) {
        const user = JSON.parse(userString);
        console.log('User retrieved:', user);
        setUser(user);
        return user;
      } else {
        console.log('User not found in AsyncStorage');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user from AsyncStorage:', error);
      return null;
    }
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 38.7223,
    longitude: -9.1393,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  const [stationData, setStationData] = useState([]);

  const [showMenu, setShowMenu] = useState(false);
  
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    retrieveUser();
    setStationData(stationsData);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permesso di posizione non concesso');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      /*setMapRegion({ 
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });*/
    })();
  }, []);

  const getLocationUser = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permesso di posizione non concesso');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({ 
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScanButtonPress = () => {
    setIsScanning(!isScanning);
  };

  const handleBarCodeScanned = ({ data }) => {
    console.log('QR Code scanned:', data);
    setIsScanning(false);
  };

  const [filterText, setFilterText] = useState('');
  const [filterPopup, setFilterPopup] = useState(false);
  const [selectedStationId, setSelectedStationId] = useState(null);
  const [openBottom, setOpenBottom] = useState(false);

  const [onlyOpen, setOnlyOpen] = useState(false);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyClosed, setOnlyClosed] = useState(false);

  const handleInputChange = (text) => {
    setFilterText(text);
  };

  const customMapStyle = [
    {
      elementType: 'all',
      stylers: [
        { saturation: -40 }, 
      ],
    },
  ];

  const handlePressStation = (id) => {
    setSelectedStationId(id);
    setOpenBottom(true)
  };

  const navigatePageStation = () => {
    navigation.navigate("stationdetails",{station: selectedStationId})
  };

  const hanldeFilterStation = () => {

    const filteredStations = stationsData.filter(station => {
      const isOpen = onlyOpen ? station.status === 'online' : true;
      const isAvailable = onlyAvailable ? station.numberPowerBank > 0 : true;
      const isClosed = onlyClosed ? station.numberPowerBank < 8 : true;
  
      return isOpen && isAvailable && isClosed;
    });
  
    setStationData(filteredStations);
    setFilterPopup(false);
  };


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

  const confirmPayment = async (clientSecret) => {
    try {
      const { setupIntent, error } = await confirmSetupIntent(clientSecret, {
        paymentMethodType: 'card',
      });
      
      if (error) {
        console.error('Errore durante la conferma del pagamento:', error.message);
      } else {
        console.log('Pagamento confermato con successo:', setupIntent);
      }
    } catch (error) {
      console.error('Errore generico durante la conferma del pagamento:', error.message);
    }
  };

  const handlePayment = async () => {
    const response = await fetch(`${network.serverip}/charge-customer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId: "cus_P7xCFIFF05uAGM", 
      }),
    });
  
    const { success, clientSecret } = await response.json();
  
    if (success) {
      await confirmPayment(clientSecret);
  
      if (error) {
        console.error('Errore durante la conferma del pagamento:', error.message);
      } else {
        console.log('Pagamento confermato con successo:', paymentMethod);
      }
    } else {
      console.error('Errore nel backend durante la creazione del SetupIntent.');
    }
  };

  return (
      <LinearGradient 
        colors={[colors.dark, colors.orange]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 4.7, y: 0 }}
        locations={[0, 0.5]}
        style={styles.container}
      >
         {isScanning && hasPermission && (
            <View style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              zIndex: 11,
            }}>
              <TouchableOpacity onPress={() => setIsScanning(false)} style={{position: 'absolute', left: 20, zIndex: 20, top : 80, backgroundColor: colors.light, width: 40, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}} >
                  <Ionicons name='close' size={25} color={colors.dark} />                
              </TouchableOpacity> 
              <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={styles.cameraScanner}
                />              
            </View>

            )}
          {filterPopup && (
              <View style={styles.popupShadow}>
                <FilterPopup 
                setPopupFilter={setFilterPopup}
                onlyOpen={onlyOpen}
                setOnlyOpen={setOnlyOpen}
                onlyClosed={onlyClosed}
                setOnlyClosed={setOnlyClosed}
                onlyAvailable={onlyAvailable}
                setOnlyAvailable={setOnlyAvailable}
                hanldeFilterStation={hanldeFilterStation}
                t={t} />
              </View>
            )}    
    <SafeAreaView style={styles.container}> 

    <ScrollView style={{width: '70%'}}>
      <View style={{ justifyContent: 'flex-start', padding: 15, width: '100%' }}>
      <TouchableOpacity 
        style={{padding: 1, borderRadius: 50, width: 42, height: 42, justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#74F680', position: 'sticky'}}
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 300,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Ionicons name='close' size={20} color={'#74F680'} />

          </TouchableOpacity>
      <View style={styles.UserProfileCardContianer}>
        <Image source={logo} style={{
          width: '95%',
          height: 43,
          marginBottom: 30,
          marginTop: 10,
        }} />
        <UserProfileCard
          inviti={user ? user.inviti : 0}
          minuti={user ? user.minuti : 0}
          noleggi={user ? user.noleggi : 0}
        />
      </View>

        <View style={{ flexGrow: 1, marginTop: 40, width: '100%' }}>
          {
            // Tab Bar Buttons....
          }

          {/*TabButton(currentTab, setCurrentTab, "Home", 'home', 'home', navigation, user)*/}
          {TabButton(currentTab, setCurrentTab, t('noleggi-gratis'), 'gift-outline', 'noleggigratis', navigation, user)}
          {TabButton(currentTab, setCurrentTab, t('pagamenti'), 'card-outline', 'payments', navigation, user)}
          {TabButton(currentTab, setCurrentTab, t('tariffe'), 'cash-outline', 'prices', navigation, user)}
          {TabButton(currentTab, setCurrentTab, t('profilo'), 'person-outline', 'profile', navigation, user)}
          {TabButton(currentTab, setCurrentTab, t('aiuto'), 'help-circle-outline', 'help', navigation, user)}
          {TabButton(currentTab, setCurrentTab, t('termini-condizioni'), 'document-text-outline', 'terms', navigation, user)}
          {TabButton(currentTab, setCurrentTab, t('privacy'), 'shield-checkmark-outline', 'privacy', navigation, user)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, t('esci'), 'exit-outline', 'login', navigation)}
        </View>

      </View>
      </ScrollView>
      {
        // Over lay View...
      }
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: colors.light,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 0,
        paddingVertical: 14,
        borderRadius: showMenu ? 40 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <View style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            width: '100%'
          }}>
          <TouchableOpacity 
          style={{
            width: '15%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 300,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>          

            <View style={{
              padding: 6, 
              borderRadius: 50, 
              width: 52, height: 52, 
              justifyContent: 'center', 
              alignItems: 'center', 
              marginBottom: 20, 
              borderWidth: 1.2, 
              borderColor: colors.dark,
              backgroundColor: colors.dark,
              marginTop: 25,
              marginRight: 20,}}>
                <Ionicons name="menu" size={28} color={colors.green} />
            </View>

          </TouchableOpacity>
              <View
                style={{
                  width: '58%',
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  left: 5,
                  backgroundColor: colors.dark,  // Aggiungi un colore di sfondo
                  shadowColor: colors.light_black,
                  elevation: 10,
                  shadowOffset: { width: 0, height: 2 }, // Aggiorna la shadowOffset
                  shadowOpacity: 0.4,  // Aggiorna la shadowOpacity
                  borderRadius: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Ionicons name='search' color={colors.light} size={20} />
                <TextInput
                style={{marginLeft: 6, fontSize: 17, color: colors.light, fontFamily: 'poppins_500'}}
                placeholder={t("search-position")}
                placeholderTextColor={colors.light}
                value={filterText}
                onChangeText={handleInputChange}
              />                
              </View>


              <TouchableOpacity onPress={() => setFilterPopup(true)}>
                <View style={{
                  padding: 6, 
                  borderRadius: 50, 
                  width: 52, height: 52, 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  marginBottom: 20, 
                  borderWidth: 1.2, 
                  borderColor: colors.dark,
                  backgroundColor: colors.dark,
                  marginTop: 25,
                  marginLeft: 20,
                }}>
                    <Ionicons name="filter" size={20} color={colors.green} /> 
                </View>
              </TouchableOpacity>


          </View>
          <TouchableWithoutFeedback 
          onPress={showMenu ? 
            () => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 300,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(false);
          } : null}>
          <View style={styles.bodyContainer}> 
            <View style={styles.mapcontainer}>
            <Image source={effect} style={styles.effect} />
            <MapView style={styles.map} 
                region={mapRegion}
                provider={PROVIDER_GOOGLE}
                showsUserLocation = {true}
                //showsMyLocationButton = {true}
                customMapStyle={customMapStyle}>
                {/*<Marker coordinate={mapRegion} title='Marker'
                />*/}
                {stationData && stationData.map((station) => (
                    <Marker
                      key={station.id}
                      coordinate={station.coordinate}
                      title={station.title}
                      pinColor={selectedStationId === station.id ? 'blue' : 'red'}
                      onPress={() => handlePressStation(station)}
                    >
                      <Image source={station.status == "offline" || station.numberPowerBank == 0 ? require('../../assets/pointerGray.png') : require('../../assets/pointer.png')} style={{height: 36, width: 36 }} />
                      </Marker>
                  ))}
            </MapView>
                <View style={styles.scanContainer}>
                    {openBottom && (
                      <TouchableOpacity activeOpacity={0.8} style={styles.station} onPress={navigatePageStation}>
                        <View style={{
                          marginHorizontal: 10,
                          marginRight: 20,
                        }}>
                          <Image source={{ uri: selectedStationId.image}} style={{
                            width: 90,
                            height: 90,
                            borderRadius: 10,
                          }} />
                        </View>
                        <View style={{
                          width: '60%'
                        }}>
                          <Text style={{color: colors.dark}}>{selectedStationId?.title}</Text>
                          <View style={{
                            backgroundColor: selectedStationId.status == 'offline' ? '#999999' : selectedStationId.numberPowerBank > 0 ? '#00C213' : '#B50000',
                            paddingVertical: 3,
                            paddingHorizontal: 12,
                            textAlign: 'center',
                            width: 80,
                            marginVertical: 5,
                            borderRadius: 20,
                          }}>
                            <Text style={{
                              color: selectedStationId.status == 'offline' ? colors.light : colors.dark,
                              textAlign: 'center',
                              }}>{selectedStationId?.status}</Text>
                          </View>

                          <Text style={{color: colors.muted, fontSize: 12,}}>{selectedStationId?.address}</Text>
                        </View>
                      </TouchableOpacity>  
                    )}
                      <StripeProvider
                          publishableKey={publishableKey}
                          urlScheme="your-url-scheme"
                          merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
                          >
                    <View style={styles.scanContainerbutton}>
                    <TouchableOpacity style={{
                        backgroundColor: colors.dark,
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        right: 25,
                      }}
                      onPress={getLocationUser}>
                        <Ionicons size={25} name='location' color={colors.light} />
                      </TouchableOpacity>  
                      <TouchableOpacity style={styles.scanButton} onPress={card && user && card.length > 0 ? handleScanButtonPress : openPaymentSheet}>
                          <Ionicons name="qr-code" size={30} color={!isScanning ? colors.green : 'green'} />
                      </TouchableOpacity>                    
                    </View>
                    </StripeProvider>

                </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image, route, navigation, user) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "Esci") {
        (async () => {
          await AsyncStorage.removeItem("authUser");
          navigation.replace('login');
        })();
      } else {
        setCurrentTab(title);
        navigation.navigate(route, { user: user });
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 24,
        //backgroundColor: currentTab == title ? colors.dark : colors.light,
        paddingLeft: 13,
        paddingRight: 14,
        borderRadius: 8,
        marginTop: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: colors.light,
      }}>

        <Ionicons name={image} style={{
          width: 30, height: 30,
        }}
        size={25}
        color={colors.light} />

        <Text style={{
          fontSize: 16,
          fontFamily: 'poppins_500',
          paddingLeft: 15,
          color: currentTab == title ? "#fff" : colors.light
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const FilterPopup = ({setPopupFilter, onlyOpen, setOnlyOpen, onlyAvailable, setOnlyAvailable, onlyClosed, setOnlyClosed, hanldeFilterStation, t}) => {
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
        onPress={() => setPopupFilter(false)}>
          <Ionicons name='close' size={20} color={colors.dark} />
        </TouchableOpacity>
        <Text style={{color: colors.light, fontSize: 22, fontFamily: 'poppins_500'}}>{t('filtra')}</Text>
      </View>
      <View style={styles.bodyFilter}>
        <View style={styles.filterItem}>
        <Text style={{color: colors.muted, fontSize: 16, fontFamily: 'poppins_500'}}>{t('filter1')}</Text>
          <Switch
            trackColor={{ false: colors.muted, true: colors.dark }}
            thumbColor={onlyOpen ? colors.green : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setOnlyOpen(!onlyOpen)}
            value={onlyOpen}
          />
        </View>
        <View style={styles.filterItem}>
        <Text style={{color: colors.muted, fontSize: 16, width: '60%', fontFamily: 'poppins_500'}}>{t('filter2')}</Text>
          <Switch
            trackColor={{ false: colors.muted, true: colors.orange }}
            thumbColor={onlyAvailable ? colors.green : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setOnlyAvailable(!onlyAvailable)}
            value={onlyAvailable}
          />
        </View>
        <View style={styles.filterItem}>
        <Text style={{color: colors.muted, fontSize: 16, width: '60%', fontFamily: 'poppins_500'}}>{t('filter3')}</Text>
          <Switch
            trackColor={{ false: colors.muted, true: colors.orange }}
            thumbColor={onlyClosed ? colors.green : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setOnlyClosed(!onlyClosed)}
            value={onlyClosed}
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
          paddingVertical: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={hanldeFilterStation}>
          <Text style={{color: colors.light, fontSize: 18, fontFamily: 'poppins_600'}}>{t('button-filter')}</Text>
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
    zIndex: 10,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 0,
    width: '100%',
    height: '100%',
    width: "100%",
    flexDirecion: "row",
  },
  bodyContainer: {
    width: "100%",
    flexDirecion: "row",
    paddingBottom: 0,
    height: '86%',
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  map: {
    width: '100%',
    height: '100%',
    paddingBottom: 100, 
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    bottom: 0,
  },
  mapcontainer: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position:'relative',
  },
  scanButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
    borderRadius: 30,
    width: "50%",
    height: 50,
    elevation: 10,
    shadowColor: colors.dark,
    shadowOffset: 1,
    shadowOpacity: 1,
  },
  scanContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    justifyContent: 'center',
    //paddingLeft: 35,
    alignItems: 'center',
    flexDirection: 'column',
  },
  scanContainerbutton: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    //paddingLeft: 35,
    alignItems: 'center',
    flexDirection: 'row',
  },
  effect: {
    width: '100%',
    height: 115,
    marginBottom: -80,
    marginTop: -45,
    zIndex: 10,
  },
  UserProfileCardContianer: {
    width: "100%",
    height: "15%",
    paddingBottom: 10,
  },
  station: {
    width: '90%',
    height: 110,
    borderRadius: 10,
    zIndex: 10,
    backgroundColor: colors.light,
    marginBottom: 20,
    elevation: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: 1,
    shadowOpacity: 1,
  },
  cameraScanner: {
    width: '100%',
    height: '100%',
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
    width: '90%',
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
    justifyContent: 'space-between',
    width: '90%',
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});
