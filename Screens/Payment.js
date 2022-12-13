import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
const Payment = ({ navigation, route }) => {
  const [checkbox, setCheckbox] = useState(true);
  const changeIcon = () => {
    setCheckbox(!checkbox);
  };
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.btn}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.btnTxt}>UPI / Wallet</Text>
            <Image
              style={{
                height: 18,
                width: 20,
                left: 8,
                top: 2,
              }}
              source={require("./Data-imgs/upi.png")}
            />
          </View>
          <Text>(PhonePe/Gpay/Paytm)</Text>
          <Icon
            name={checkbox ? "checkmark-circle-outline" : "checkmark-circle"}
            size={30}
            style={styles.icon}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Credit / Debit Card</Text>
          <Image
            style={{
              height: 20,
              width: 150,
              top: 5,
            }}
            source={require("./Data-imgs/cards.png")}
          />
          <Icon
            name={checkbox ? "checkmark-circle-outline" : "checkmark-circle"}
            size={30}
            style={styles.icon}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { height: 100 }]}>
          <Text style={styles.btnTxt}>Net Banking</Text>
          <Icon
            name={checkbox ? "checkmark-circle-outline" : "checkmark-circle"}
            size={30}
            style={[styles.icon, { top: 5 }]}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { height: 100 }]}>
          <Text style={styles.btnTxt}>Cash On Delivery</Text>
          <Icon
            name={checkbox ? "checkmark-circle-outline" : "checkmark-circle"}
            size={30}
            style={[styles.icon, { top: 5 }]}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { height: 100 }]}>
          <Text style={styles.btnTxt}>EMI (Easy Installments)</Text>
          <Icon
            name={checkbox ? "checkmark-circle-outline" : "checkmark-circle"}
            size={30}
            style={[styles.icon, { top: 5 }]}
            color="#3A7F0D"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          borderWidth: 0.3,
          bottom: 10,
          borderColor: "gray",
        }}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {route.params.price}
          </Text>
          <Text style={{ color: "#3A7F0D", padding: 5 }}>
            View Price Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={{ fontSize: 17, color: "#ffffff", fontWeight: "600" }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Payment;

const styles = StyleSheet.create({
  btn: {
    borderBottomWidth: 0.5,
    padding: 30,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60,
  },
  btn1: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn2: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A7F0D",
    height: "90%",
    right: 10,
    borderRadius: 10,
  },
  icon: {
    alignSelf: "flex-end",
    marginTop: -30,
    bottom: 10,
  },
});