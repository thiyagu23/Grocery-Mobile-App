import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AuthStyle from "../components/Authentication/AuthStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Its working in Main.js screen using props

function LogoTitle() {
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
      <Image source={require("./Data-imgs/Vector-left.png")} />
      <Image
        style={{ left: 360 }}
        source={require("./Data-imgs/Vector-right.png")}
      />
      <Text style={[AuthStyle.otpText, { paddingLeft: 5, fontSize: 20 }]}>
        Hi {userName},
      </Text>
    </View>
  );
}

export default LogoTitle;
