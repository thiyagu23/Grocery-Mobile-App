import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUp from "./SignUp";

export default function Login({ navigation }) {
  return (
    <SignUp
      name={"Login"}
      LogOtp={() => navigation.navigate("Otp")}
      Forgot={() => navigation.navigate("ForgotPassword")}
    />
  );
}
