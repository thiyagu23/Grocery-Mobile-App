import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUp from "./SignUp";

export default function Login({ navigation }) {
  return (
    <SignUp
      name={"Login"}
      MainPage={() => navigation.navigate("Main")}
      Forgot={() => navigation.navigate("ForgotPassword")}
      SignUp={() => navigation.navigate("SignUp")}
    />
  );
}
