import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import AppStyle from "./AppStyle";

const Payment = ({ navigation, route }) => {
  const [checkbox, setCheckbox] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const changeIcon = () => {
    setCheckbox(!checkbox);
  };
  let tax = 30;
  let fees = 25;
  let extras = tax + fees;
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={{ flex: 1 }}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <Text>hiiii</Text>
        </Modal>
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
            name="chevron-forward-outline"
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
            name="chevron-forward-outline"
            size={30}
            style={styles.icon}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { height: 100 }]}>
          <Text style={styles.btnTxt}>Net Banking</Text>
          <Icon
            name="chevron-forward-outline"
            size={30}
            style={[styles.icon, { top: 5 }]}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { height: 100 }]}>
          <Text style={styles.btnTxt}>Cash On Delivery</Text>
          <Icon
            name="chevron-forward-outline"
            size={30}
            style={[styles.icon, { top: 5 }]}
            color="#3A7F0D"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { height: 100 }]}>
          <Text style={styles.btnTxt}>EMI (Easy Installments)</Text>
          <Icon
            name="chevron-forward-outline"
            size={30}
            style={[styles.icon, { top: 5 }]}
            color="#3A7F0D"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            padding: 10,
            color: "#3A7F0D",
            left: 20,
          }}>
          Bill Details
        </Text>
        <View style={AppStyle.billCard}>
          <View>
            <Text style={AppStyle.cartName}>Item Total</Text>
            <Text style={AppStyle.cartName}>Delivery Fee</Text>
            <Text style={AppStyle.cartName}>Taxes and Charges</Text>
          </View>
          <View>
            <Text style={[AppStyle.cartPrice, { left: 55 }]}>
              ${route.params.price}.00
            </Text>
            <Text style={AppStyle.cartPrice}>+ $25.00</Text>
            <Text style={AppStyle.cartPrice}>+ $30.00</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              left: 30,
              // top: 15,
            }}>
            Order Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              left: 305,
              bottom: 50,
            }}>
            {" "}
            ${route.params.price + extras}.00
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("PlaceOrder")}>
        <Text style={styles.placeOrder}>Place Your Order</Text>
      </TouchableOpacity>
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
  placeOrder: {
    width: "100%",
    height: 60,
    textAlign: "center",
    backgroundColor: "#3A7F0D",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingTop: 15,
    marginTop: -25,
  },
});
