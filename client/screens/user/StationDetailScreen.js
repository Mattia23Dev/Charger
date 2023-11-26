import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
  Linking,
  Share,
  Button,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import cartIcon from "../../assets/icons/cart_beg.png";
import { colors, network } from "../../constants";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomAlert from "../../components/CustomAlert/CustomAlert";
import invita from '../../assets/invita.png';
import data from '../../assets/date.png';
import luogo from '../../assets/location.png'
import moment from "moment";

const StationDetailScreen = ({ navigation, route }) => {
  const { station } = route.params;

  const handleAddToCat = (item) => {
   console.log(item);
  };

  const shareContent = async (item) => {
    try {
      const options = {
        title: 'Condividi con',
        message: 'Ciao, ti condivido un evento fantastico, non perderlo.',
        url: item.title ? item.title : "",
      };
      await Share.share(options);
    } catch (error) {
      console.log('Errore nella condivisione:', error.message);
    }
  };

  //remove the authUser from async storage and navigate to login
  const logout = async () => {
    await AsyncStorage.removeItem("authUser");
    navigation.replace("login");
  };

  const [productImage, SetProductImage] = useState(" ");

  //method to fetch wishlist from server using API call


  //set quantity, avaiableQuantity, product image and fetch wishlist on initial render
  useEffect(() => {
    //SetProductImage(`${network.serverip}/uploads/${station?.image}`);
    SetProductImage(`${station?.image}`);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.top}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color={"white"}
          />
          <Text style={styles.topText}>Dettagli</Text>
        </TouchableOpacity>

        <View></View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.productImageContainer}>
          <Image source={{ uri: productImage }} style={styles.productImage} />
        </View>
        {/*<CustomAlert message={error} type={alertType} />*/}
        <View style={styles.productInfoContainer}>
          <View style={styles.share}>
            <Image style={styles.imageShare} source={invita} />
            <TouchableOpacity style={styles.buttonShare} onPress={() => shareContent(station)}>
                <Text style={{fontSize: 12, color: '#FFF', fontWeight: '500'}}>Invita</Text>
            </TouchableOpacity>  
          </View>
            <View style={styles.productInfoTopContainer}>
            <ScrollView>
              <View style={styles.productNameContaier}>
                <Text style={styles.productNameText}>{station?.title}</Text>
              </View>
              <View style={styles.infoButtonContainer}>
                <View>
                  <View style={styles.dataLoc}>
                    <Image style={styles.imageDat} source={data} />
                    <Text style={styles.testoIcona}>Orari</Text>
                  </View>
                  <View style={styles.dataLoc}>
                    <Image style={styles.imageDat} source={luogo} />
                    <Text style={styles.testoIcona}>{station?.address ? station.address : 'Nessun luogo'}</Text>
                  </View>
                </View>
              </View>
                <View style={styles.productDescriptionContainer}>
                  <Text style={styles.secondaryTextSm}>Descrizione:</Text>
                  <Text>{station?.description}</Text>
                </View>
              </ScrollView>    
          </View>        
          <View style={styles.productInfoBottomContainer}>
            <View style={styles.productButtonContainer}>
                <CustomButton
                  text={"Sblocca"}
                  onPress={() => {
                    handleAddToCat(station);
                  }}
                />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StationDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  topBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    paddingVertical: 18,
    paddingHorizontal: 20,
    zIndex: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 40,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontSize: 20,
    marginLeft: 10,
    color: "white",
  },
  toBarText: {
    fontSize: 15,
    fontWeight: "600",
  },
  bodyContainer: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  productImageContainer: {
    width: "100%",
    flex: 1.5,
    backgroundColor: colors.light,
    flexDirecion: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0,
  },
  productInfoContainer: {
    width: "100%",
    flex: 3,
    backgroundColor: colors.white,
    //borderTopLeftRadius: 25,
    //borderTopRightRadius: 25,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    elevation: 25,
    marginTop: -30,
  },
  testoIcona: {
    marginLeft: 10,
    fontWeight: '500',
  },
  share: {
    borderRadius: 30,
    width: '80%',
    margin: '0 auto',
    backgroundColor: '#FEFEFF',
    position: 'relative',
    bottom: 20,
    paddingVertical: 8,
    height: 50,
    elevation: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 2,
    paddingHorizontal: 10,
  },
  buttonShare: {
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: '#3D56F0',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageShare: {
    width:'60%',
    height: 'auto'
  },
  productImage: {
    height: 350,
    width: "100%",
    resizeMode: "cover",
    opacity: 0.8,
  },
  productInfoTopContainer: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  imageDat: {
    width: 50,
    height: 50,
  },
  dataLoc: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  productInfoBottomContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: 120,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  productButtonContainer: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: colors.light,
    width: "100%",
    height: 100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  productNameContaier: {
    padding: 5,
    paddingLeft: 20,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  productNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoButtonContainer: {
    padding: 5,
    paddingRight: 0,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wishlistButtonContainer: {
    height: 50,
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  productDetailContainer: {
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },
  secondaryTextSm: { fontSize: 15, fontWeight: "bold" },
  primaryTextSm: { color: colors.primary, fontSize: 15, fontWeight: "bold" },
  productDescriptionContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  counterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 50,
    paddingVertical: 20,
  },
  counter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  counterButtonContainer: {
    display: "flex",
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: 15,
    elevation: 2,
  },
  counterButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  counterCountText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItemCountContainer: {
    position: "absolute",
    zIndex: 10,
    top: -10,
    left: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 22,
    width: 22,
    backgroundColor: colors.danger,
    borderRadius: 11,
  },
  cartItemCountText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 10,
  },
});
