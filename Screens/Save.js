import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Save = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View>
        <Text>Save</Text>
      </View>
    </LinearGradient>
  );
};

export default Save;

const styles = StyleSheet.create({});
