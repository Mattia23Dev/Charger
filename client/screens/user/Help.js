import { View, Text, TouchableOpacity, StyleSheet, Platform, Linking } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { colors } from '../../constants';

const Help = ({navigation}) => {

  const navigateOnboarding = () => {
    navigation.navigate('onboarding')
  };

  const navigateFaq = () => {
    navigation.navigate('faq')
  }

  const handleEmailPress = async () => {
    const emailAddress = 'assistenza@nextacharge.com';

    const mailtoUrl = `mailto:${emailAddress}`;

    try {
      await Linking.openURL(mailtoUrl);
    } catch (error) {
      console.error('Errore nell\'apertura dell\'app di posta:', error);
    }
  };

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
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500 }}>Assistenza</Text>
      </View>
      <View style={styles.bodyContainer}>
            <Text style={styles.textStyle}>
                Come possiamo aiutarti?
            </Text>
            <View style={styles.faq}>
              <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 15,}}>Domande frequenti</Text>
              <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 40, color: colors.muted}}>Hai dubbi? consulta le nostre FAQ</Text>
              <TouchableOpacity style={{
                    borderRadius: 30,
                    width: '40%',
                    backgroundColor: colors.orange,
                    paddingVertical: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: 30,
                    marginLeft: 0,
                    flexDirection: 'row',
                    width: '90%'
              }}
              onPress={navigateFaq}>
                <Ionicons
                name="help-outline"
                color={colors.green}
                size={25}/>
                <Text style={{color: colors.green, fontWeight: 500, marginLeft: 4, fontSize: 18, textAlign: 'center'}}>Apri le FAQ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.faq}>
              <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 15,}}>Tutorial</Text>
              <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 40, color: colors.muted}}>Vuoi riguardare il tutorial?</Text>
              <TouchableOpacity style={{
                    borderRadius: 30,
                    width: '40%',
                    backgroundColor: colors.orange,
                    paddingVertical: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginLeft: 0,
                    paddingHorizontal: 40,
                    flexDirection: 'row',
                    width: '90%'
              }}
              onPress={navigateOnboarding}
              >
                <Ionicons
                name="star-outline"
                color={colors.green}
                size={25}/>
                <Text style={{color: colors.green, fontWeight: 500, marginLeft: 4, fontSize: 18, textAlign: 'center'}}>Apri il tutorial</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.faq}>
              <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 15,}}>Scrivici</Text>
              <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 40, color: colors.muted}}>Vuoi scriverci?</Text>
              <TouchableOpacity style={{
                    borderRadius: 30,
                    width: '40%',
                    backgroundColor: colors.orange,
                    paddingVertical: 15,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingHorizontal: 30,
                    flexDirection: 'row',
                    width: '100%'
              }}
              onPress={handleEmailPress}>
              <Ionicons
                name="mail-outline"
                color={colors.green}
                size={25}/>
                <Text style={{color: colors.green, fontWeight: 500, marginLeft: 4, fontSize: 18}}>assistenza@nextacharge.com</Text>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

export default Help

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 40,
    position: 'relative',
    height: 80,
    marginBottom: 0,
  },
  bodyContainer: {
    backgroundColor: colors.light,
    padding: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '90%',
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
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 30,
    marginTop: 20,
  },
  faq: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
})