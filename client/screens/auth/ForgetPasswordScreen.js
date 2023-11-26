import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors, network } from "../../constants";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomAlert from "../../components/CustomAlert/CustomAlert";


const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [okEmail, setOkEmail] = useState(false);
  const [okokPass, setOkOkPass] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const sendInstructionsHandle = () => {
    setIsLoading(true);
    if (email == "") {
      return setError("Inserisci l'email");
    }
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        email: email
      }),
      redirect: "follow",
    };

    fetch(network.serverip + "/send-email-reset", requestOptions) 
      .then((response) => response.json())
      .then((result) => {

        if (result.status == 200){
          console.log(result);
          setIsLoading(false);
          setOkEmail(true);
        } else {
          return setError(result.message);
        }
      })
      .catch((error) => {
        console.log("error", setError(error.message));
      });
  };

  const verifyCode = () => {
    if (email == "") {
      return setError("Inserisci l'email");
    }
    if (code == ""){
      return setError('Codice mancante');
    }
    if (password == ""){
      return setError('Inserisci la password');
    }
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        email: email,
        code: code,
        password: password
      }),
      redirect: "follow",
    };

    fetch(network.serverip + "/verify-code", requestOptions) 
    .then((response) => response.json())
    .then((result) => {
      if (result.status == 200){
        console.log(result);
        navigation.navigate("login");
      } else {
        return setError(result.message);
      }
    })
    .catch((error) => {
      console.log("error", setError(error.message));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopBarContainer}>
        <TouchableOpacity
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
      </View>
      <View style={styles.screenNameContainer}>
        <View>
          <Text style={styles.screenNameText}>Reimposta Password</Text>
        </View>
        <View>
          <Text style={styles.screenNameParagraph}>
            Inserisci l'email associata al tuo account e ti manderemo un email con
            le istruzioni per reimpostare la password.
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <CustomAlert message={error} type={"error"} />
        <CustomInput 
        value={email}
        setValue={setEmail}
        placeholder={"Inserisci l'email"}
         />
         {isloading && (
          <Text>Loading..</Text>
         )}
         {okEmail && !isloading && (
          <>
          <CustomInput 
          value={code}
          setValue={setCode}
          placeholder={"Inserisci il codice"}
            />
          <CustomInput 
            value={password}
            setValue={setPassword}
            placeholder={"Imposta password"}
            secureTextEntry={true}
              />
            </>  
         )}
      </View>
      {!okEmail ? (
      <TouchableOpacity
      onPress={sendInstructionsHandle}
      style={{
        padding: 15,
        paddingVertical: 18,
        width: "100%",
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: colors.orange,
      }}>
        <Text style={{color: colors.light, fontWeight: '500'}}>Invia istruzioni</Text>
      </TouchableOpacity>
      ) : (
      <TouchableOpacity
      onPress={verifyCode}
      style={{
        padding: 15,
        paddingVertical: 18,
        width: "100%",
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: colors.orange,
      }}>
        <Text style={{color: colors.light, fontWeight: '500'}}>Imposta password</Text>
      </TouchableOpacity>
      )}
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flexDirecion: "row",
    backgroundColor: colors.dark,
    alignItems: "center",
    padding: 20,
    flex: 1,
    paddingTop: 40,
  },
  TopBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40,
  },
  screenNameContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.light,
  },
  screenNameParagraph: {
    marginTop: 5,
    fontSize: 15,
    color: colors.light
  },
  formContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    width: "100%",
    flexDirecion: "row",
  },
});
