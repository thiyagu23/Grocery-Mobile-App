import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AuthStyle from "../components/Authentication/AuthStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";
// Its working in Main.js screen using props

function LogoTitle({ notification }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          setUserName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[AuthStyle.otpText, { fontSize: 20 }]}>
        HI, {userName} !
      </Text>
    </View>
  );
}

export default LogoTitle;
// <Image
//   style={{ left: 360 }}
//   source={require("./Data-imgs/Vector-right.png")}
// />
