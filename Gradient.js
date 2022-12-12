import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Gradient = () => {
  return (
    <LinearGradient
      colors={["#99de81", "#F5F5F5"]}
      style={{ height: "100%" }}></LinearGradient>
  );
};

export default Gradient;

const styles = StyleSheet.create({});
