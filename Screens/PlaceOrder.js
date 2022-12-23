import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceOrder = ({ navigation }) => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 150,
        }}>
        <LottieView
          source={require("./Data-imgs/success.json")}
          autoPlay
          loop
          autoSize
          style={{ width: "70%", aspectRatio: 1, bottom: 30 }}
        />
        <Text
          style={[
            styles.emptyCart,
            { fontSize: 25, padding: 10, marginTop: 70 },
          ]}>
          Hurray!!!
        </Text>
        <Text style={[styles.emptyCart, { fontSize: 20 }]}>
          Your Order is Successfully Placed !
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ flexDirection: "row", marginTop: -60 }}>
          <LottieView
            source={require("./Data-imgs/back-arrow.json")}
            autoPlay
            loop
            autoSize
            style={{ width: "50%", aspectRatio: 1, bottom: 30 }}
          />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#3A7F0D",
              right: 70,
              top: 28,
              paddingTop: 5,
            }}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
// <Icon name="arrow-back" size={35} style={styles.icon} />
export default PlaceOrder;

const styles = StyleSheet.create({
  emptyCart: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#3A7F0D",
    bottom: 130,
  },
});
