import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { colors } from '../../constants';

const Prices = ({navigation}) => {
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
        <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 30, }}>Tariffe</Text>
        <Text style={{ fontSize: 34, textAlign: 'center', color: '#fff', fontWeight: 500, marginTop: 4, }}>€1,00 / ora</Text>
      </View>
      <View style={styles.bodyContainer}>
            <Text style={styles.textStyle}>
                Dettagli
            </Text>
            <View style={styles.tariffe}>
                <View style={styles.tariffaLeft}>
                    <Text style={{color: '#fff', fontSize: 22, fontWeight: 500,}}>Giorno 1</Text>
                    <Text style={{textAlign: 'center', color: colors.light, fontSize: 16}}>(0-24h)</Text>
                </View>
                <View style={styles.tariffaRight}>
                    <Text style={{fontSize: 24, color: colors.muted}}>€ 1,00 / ora</Text>
                    <Text style={{fontSize: 16, color: colors.muted, marginTop: 5}}>Massimo € 8,00</Text>
                </View>    
            </View>
            <View style={styles.tariffe}>
                <View style={styles.tariffaLeft}>
                    <Text style={{color: '#fff', fontSize: 22, fontWeight: 500,}}>Giorno 2</Text>
                    <Text style={{textAlign: 'center', color: colors.light, fontSize: 16}}>(0-24h)</Text>
                </View>
                <View style={styles.tariffaRight}>
                    <Text style={{fontSize: 24, color: colors.muted}}>€ 1,00 / ora</Text>
                    <Text style={{fontSize: 16, color: colors.muted, marginTop: 5}}>Massimo € 8,00</Text>
                </View>    
            </View>
            <View style={styles.tariffe}>
                <View style={styles.tariffaLeft}>
                    <Text style={{color: '#fff', fontSize: 22, fontWeight: 500,}}>Giorno 3</Text>
                    <Text style={{textAlign: 'center', color: colors.light, fontSize: 16}}>(0-24h)</Text>
                </View>
                <View style={styles.tariffaRight}>
                    <Text style={{fontSize: 24, color: colors.muted}}>€ 1,00 / ora</Text>
                    <Text style={{fontSize: 16, color: colors.muted, marginTop: 5}}>Massimo € 8,00</Text>
                </View>    
            </View>
            <View style={styles.bottomBody}>
                <Text style={{width: '45%', color: '#fff', fontSize: 16}}>Vuoi ricevere sconti e offerte promozionali?</Text>
                <TouchableOpacity
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
                        name="gift"
                        size={25}
                        color={colors.dark}
                         />
                    <Text
                    style={{fontSize: 20, marginHorizontal: 5, color: colors.muted}}>
                        Certo
                    </Text>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default Prices

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
    fontWeight: 600,
    marginBottom: 30,
  },
  tariffe: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999999'
  },
  tariffaLeft: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    padding: 20,
  },
  tariffaRight: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bottomBody: {
    width: '90%',
    backgroundColor: colors.dark,
    height: 90,
    borderRadius: 70,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})