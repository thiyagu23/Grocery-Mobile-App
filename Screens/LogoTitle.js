import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AuthStyle from "../components/Authentication/AuthStyle";

// Its working in Main.js screen using props

function LogoTitle() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={require("./Data-imgs/Vector.png")} />
      <Text style={[AuthStyle.otpText, { paddingLeft: 20 }]}>Hi Thiyagu,</Text>
    </View>
  );
}

export default LogoTitle;
