import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AuthStyle from "../components/Authentication/AuthStyle";

// Its working in Main.js screen using props

function LogoTitle() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={require("./Data-imgs/Vector-left.png")} />
      <Image
        style={{ left: 360 }}
        source={require("./Data-imgs/Vector-right.png")}
      />
      <Text style={[AuthStyle.otpText, { paddingLeft: 5, fontSize: 20 }]}>
        Hi User,
      </Text>
    </View>
  );
}

export default LogoTitle;
