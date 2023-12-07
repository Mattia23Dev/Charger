import { StyleSheet, Image, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../constants";
import logo from "../../assets/charger-splash-screen.png";
import * as Font from 'expo-font';

import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {

  const fetchFonts = () => {
    return Font.loadAsync({
      RobotoMono_700Bold: require('../../constants/font/Roboto_Mono/RobotoMono-VariableFont_wght.ttf'),
      RobotoMono_400Regular: require('../../constants/font/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf'),
      poppins_400: require('../../constants/font/Poppins/Poppins-Thin.ttf'),
      poppins_500: require('../../constants/font/Poppins/Poppins-Regular.ttf'),
      poppins_600: require('../../constants/font/Poppins/Poppins-SemiBold.ttf')
    });
  };

  //method to fetch the authUser data from aync storage if there is any and login the Dashboard or Home Screen according to the user type
  _retrieveData = async () => {
    try {
      await fetchFonts()
      const value = await AsyncStorage.getItem("authUser");
      const language = await AsyncStorage.getItem("selectedLanguage");
      if (value !== null) {
        let user = JSON.parse(value); // covert the authUser value to json
        if (user.userType === "ADMIN") {
          setTimeout(() => {
            navigation.replace("dashboard", { authUser: JSON.parse(value) }); // navigate to Admin dashboard
          }, 2000);
        } else {
          setTimeout(() => {
            navigation.replace("home", { user: JSON.parse(value) }); // navigate to User Home screen
          }, 2000);
        }
      } else if (language !== null) {
        setTimeout(() => {
          navigation.replace("login");
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.replace("chooselanguage");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check the authUser and navigate to screens accordingly on initial render
  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: colors.light,
    fontSize: 50,
  },
  logo: {
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  video: {

  },
});
