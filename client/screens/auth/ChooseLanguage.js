import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants';
import logo from '../../assets/charger-logo.png'
import i18next, {languageResources} from '../../locales/i18next';

const ChooseLanguage = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const changeLng = lng => {
    i18next.changeLanguage(lng);
  };

  const handleLanguageSelection = async (language) => {
    await AsyncStorage.setItem('selectedLanguage', language);
    changeLng(language);
    navigation.navigate('onboardingstart');
  };

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.header}>Choose Your Language</Text>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
    paddingTop: 90,
  },
  image: {
    width: '90%',
    height: 68,
  },
  bodyContainer: {
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
    height: '80%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.light,
    fontFamily: 'poppins_600'
  },
  languageButton: {
    backgroundColor: colors.light,
    padding: 10,
    marginVertical: 10,
    borderRadius: 30,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: 'poppins_500'
  },
});

export default ChooseLanguage;
