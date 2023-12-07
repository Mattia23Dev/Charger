import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants";
import {useTranslation} from 'react-i18next';

const UserProfileCard = ({ minuti, noleggi, inviti }) => {
  const {t} = useTranslation();
  return (
    <View style={styles.Container}>
      <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>{t('minuti')}</Text>
        <Text style={styles.secondaryText}>{minuti}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>{t('noleggi')}</Text>
        <Text style={styles.secondaryText}>{noleggi}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>{t('inviti')}</Text>
        <Text style={styles.secondaryText}>{inviti}</Text>
      </View>
    </View>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    display: "flex",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    paddingLeft: 10,
  },
  usernameText: {
    fontWeight: "500",
    fontSize: 14,
    color:colors.light,
    fontFamily: 'poppins_500'
  },
  secondaryText: {
    fontWeight: "600",
    fontSize: 40,
    color: "#74F680",
    fontFamily: 'poppins_600'
  },
});
