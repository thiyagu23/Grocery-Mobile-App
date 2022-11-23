import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation, LogOtp }) => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={LogOtp ? () => LogOtp() : () => navigation.navigate("Login")}>
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>LogOut</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  loginBtn: {
    width: "20%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 730,
    backgroundColor: "#3A7F0D",
    marginLeft: "78%",
    color: "white",
  },
});
