import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HelpCenter = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View>
        <Text>HelpCenter</Text>
      </View>
    </LinearGradient>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({});
