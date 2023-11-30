import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Share, Animated } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { colors } from '../../constants';
import {LinearGradient} from 'expo-linear-gradient';

const NoleggiGratis = ({navigation, route}) => {
    const { user } = route.params;

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
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 0, }}>Noleggi gratis</Text>
      </View>
      <View style={styles.bodyContainer}>
            <LinearGradient 
            colors={[colors.green, colors.orange]}
            start={{ x: -0.5, y: -0.5 }}
            end={{ x: 1.3, y: 1.3 }}
            locations={[0, 0.5]}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                borderRadius: 100,
                height: 200,
                width: 200,
                shadowColor: colors.light_black,
                borderColor: colors.light,
                borderWidth: 5,
                elevation: 10,
                shadowOffset: { width: 0, height: 0 }, // Aggiorna la shadowOffset
                shadowOpacity: 0.8,  // Aggiorna la shadowOpacity
                backgroundColor: colors.gradient,
                backgroundImage: colors.gradient,
                marginTop: -60,
              }}>
                <Text style={{color: colors.green, fontWeight: 500, fontSize: 68, textAlign: 'center'}}>{user?.minuti ? user.minuti : 0}</Text>
                <Text style={{color: colors.green, fontWeight: 400, fontSize: 20, textAlign: 'center'}}>minuti</Text>
            </LinearGradient>
            <View style={{
                    borderRadius: 30,
                    width: '100%',
                    paddingVertical: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingHorizontal: 30,
                    marginLeft: 0,
                    flexDirection: 'row',
              }}>
                <Text style={{color: colors.muted, fontWeight: 500, marginLeft: 20, fontSize: 18, textAlign: 'center'}}>
                    Per ogni amico che utilizza il tuo codice personale per un noleggio, ricevete entrambi 15 minuti di ricarica gratis.
                </Text>
            </View>
            <View style={{
                    borderRadius: 30,
                    width: '90%',
                    paddingVertical: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 30,
                    marginLeft: 0,
                    flexDirection: 'row',
              }}>
                <Ionicons
                name="pricetag"
                color={colors.dark}
                size={28}/>
                <Text style={{color: colors.dark, fontWeight: 500, marginLeft: 10, fontSize: 20, textAlign: 'center'}}>Il tuo codice</Text>
            </View>
            <View style={styles.faq}>
              <TouchableOpacity style={{
                    borderRadius: 40,
                    borderColor: colors.muted,
                    borderWidth: 2,
                    borderStyle: 'dashed',
                    paddingVertical: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 0,
                    paddingHorizontal: 30,
                    flexDirection: 'row',
                    width: '90%'
              }}>
                <Text style={{color: colors.orange, fontWeight: 500, marginLeft: 20, fontSize: 36, textAlign: 'center'}}>{user?.shareCode ? user.shareCode : "DYTJKSSY"}</Text>
              </TouchableOpacity>
            </View>
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
  )
}

export default NoleggiGratis

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
    marginBottom: 40,
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