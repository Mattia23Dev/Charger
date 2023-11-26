<<<<<<< HEAD
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
=======
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
>>>>>>> 3f4512eb85b15625a2866a4f41becc3d80dff01c
import React from 'react'
import { colors } from '../../constants';

<<<<<<< HEAD
const Help = ({navigation}) => {
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
              }}>
                <Ionicons
                name="help-outline"
                color={colors.light}
                size={25}/>
                <Text style={{color: colors.light, fontWeight: 500, marginLeft: 4, fontSize: 18, textAlign: 'center'}}>Apri le FAQ</Text>
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
              }}>
                <Ionicons
                name="star-outline"
                color={colors.light}
                size={25}/>
                <Text style={{color: colors.light, fontWeight: 500, marginLeft: 4, fontSize: 18, textAlign: 'center'}}>Apri il tutorial</Text>
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
              }}>
              <Ionicons
                name="mail-outline"
                color={colors.light}
                size={25}/>
                <Text style={{color: colors.light, fontWeight: 500, marginLeft: 4, fontSize: 18}}>assistenza@nextacharge.com</Text>
              </TouchableOpacity>
            </View>
=======


const Help = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        {/* Icona freccia */}
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Assistenza</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>COME POSSIAMO AIUTARTI?</Text>
        <Text style={styles.subTitle}>Domande Frequenti</Text>
        <Text style={styles.description}>Hai dubbi? Consulta le nostre FAQ</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apri le FAQ</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Tutorial</Text>
        <Text style={styles.description}>Vuoi riguardare il tutorial iniziale?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apri il Tutorial</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Scrivici</Text>
        <Text style={styles.description}>Vuoi scriverci?</Text>
        <Text style={styles.email}>email@email.it</Text>
      </View>

      <View style={styles.chatContainer}>
        <Text style={styles.chatTitle}>Vuoi parlare con noi?</Text>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
>>>>>>> 3f4512eb85b15625a2866a4f41becc3d80dff01c
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    backgroundColor:colors.primary,
    
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  backButtonText: {
    fontSize: 20,
  },
  titleContainer: {
    marginTop: 10,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 20,
    padding: 20,
   
    borderRadius: 10,
    backgroundColor: 'white',
    widh: '100%',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center',
    fontSize: 25,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    alignItems: 'center',
    fontSize: 15,
  },
  button: {
    marginTop: 10,
    borderRadius: 28,
    backgroundColor: '#3CA2D7',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingRight:20,
    paddingLeft:20,
    paddingTop:3,
    paddingBottom:3,
  },
  email: {
    color: 'blue',
    marginTop: 5,
    textAlign: 'center',
  },
  chatContainer: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#713CD7',
    padding: 20,
    alignItems: 'center',
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    
    
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatButton: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#D73C55',
    padding: 10,
    alignItems: 'center',
    
  },
});

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