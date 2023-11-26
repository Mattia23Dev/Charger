import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants";

const UserProfileCard = ({ minuti, noleggi, inviti }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>Minuti</Text>
        <Text style={styles.secondaryText}>{minuti}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>Noleggi</Text>
        <Text style={styles.secondaryText}>{noleggi}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>Inviti</Text>
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
    fontSize: 16,
    color:colors.light,
  },
  secondaryText: {
    fontWeight: "600",
    fontSize: 46,
    color: colors.light
  },
});
