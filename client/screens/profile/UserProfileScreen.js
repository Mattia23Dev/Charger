import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { Ionicons } from "@expo/vector-icons";
import OptionList from "../../components/OptionList/OptionList";
import { colors } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Progress from 'react-native-progress';

const UserProfileScreen = ({ navigation, route }) => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = route.params;
  console.log(user);

  const completionPercentage = user.partecipazione && user.partecipazione <= 5 ? (user.partecipazione / 5) * 100 : (5 / 5) * 100;
  const completionPercentage3 = user.partecipazione && user.partecipazione <= 3 ? (user.partecipazione / 3) * 100 : (3 / 3) * 100;

  const convertToJSON = (obj) => {
    try {
      setUserInfo(JSON.parse(obj));
    } catch (e) {
      setUserInfo(obj);
    }
  };

  // covert  the user to Json object on initial render
  useEffect(() => {
    convertToJSON(user);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={styles.TopBarContainer}>
        <TouchableOpacity>
          <Ionicons name="menu-sharp" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.screenNameContainer}>
        <Text style={styles.screenNameText}>Profile</Text>
      </View>
      <View style={styles.UserProfileCardContianer}>
        <UserProfileCard
          Icon={Ionicons}
          name={userInfo?.name}
          email={userInfo?.email}
        />
      </View>

      <View style={styles.OptionsContainer}>
        <OptionList
          text={"Account"}
          Icon={Ionicons}
          iconName={"person"}
          onPress={() => navigation.navigate("myaccount", { user: userInfo })}
        />
        <OptionList
          text={"Preferiti"}
          Icon={Ionicons}
          iconName={"heart"}
          onPress={() => navigation.navigate("mywishlist", { user: userInfo })}
  />
        {/* !For future use --- */}
        <OptionList
          text={"Settings"}
          Icon={Ionicons}
          iconName={"settings-sharp"}
          onPress={() => console.log("working....")}
        />
        <OptionList
          text={"Help Center"}
          Icon={Ionicons}
          iconName={"help-circle"}
          onPress={() => console.log("working....")}
        />
        {/* !For future use ---- End */}
        <OptionList
          text={"Esci"}
          Icon={Ionicons}
          iconName={"log-out"}
          onPress={async () => {
            await AsyncStorage.removeItem("authUser");
            navigation.replace("login");
          }}
        />
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
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
  },
  obiettivi: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  obItem: {
    width: '45%',
    minHeight: 80,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  UserProfileCardContianer: {
    width: "100%",
    height: "22%",
  },
  screenNameContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.muted,
  },
  OptionsContainer: {
    width: "100%",
  },
});
