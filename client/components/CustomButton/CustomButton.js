import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../constants";

const CustomButton = ({ text, onPress, disabled = false }) => {
  return (
    <>
      {disabled == true ? (
        <TouchableOpacity
          disabled
          style={styles.containerDisabled}
          onPress={onPress}
        >
          <Text style={styles.buttonTextDisabled}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={{color: colors.light}}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 30,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: colors.orange,
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.light,
  },
  containerDisabled: {
    padding: 15,
    width: "100%",
    paddingVertical: 30,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: colors.muted,
  },
  buttonTextDisabled: {
    fontWeight: "bold",
    color: '#fff',
  },
});
