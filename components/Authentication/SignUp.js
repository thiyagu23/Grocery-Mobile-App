import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AuthStyle from "./AuthStyle";
import BlurImg from "./BlurImg";

export default function SignUp({ navigation, name, LogOtp, Forgot }) {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={AuthStyle.container}>
        <BlurImg />
        <Text style={AuthStyle.title}>{name ? name : "Sign up"}</Text>

        <View>
          <Text style={AuthStyle.lebelText}>Mobile no</Text>

          <TextInput placeholder="Mobile no" style={AuthStyle.TextInput} />
        </View>

        <View>
          <Text style={AuthStyle.lebelText}>Password </Text>
          <Icon
            name="eye-outline"
            size={25}
            style={{
              position: "absolute",
              right: 12,
              bottom: 18,
            }}></Icon>
          <TextInput
            secureTextEntry={true}
            placeholder="password"
            style={AuthStyle.TextInput}></TextInput>
        </View>

        <Text
          onPress={
            Forgot
              ? () => Forgot()
              : () => navigation.navigate("ForgotPassword")
          }
          style={AuthStyle.inputFieldBaseText}>
          {name ? "Forgot Password?" : null}
        </Text>

        <View>
          <TouchableOpacity
            style={AuthStyle.loginBtn}
            onPress={
              LogOtp ? () => LogOtp() : () => navigation.navigate("Otp")
            }>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Get OTP
            </Text>
          </TouchableOpacity>
        </View>

        <View style={AuthStyle.accountHave}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {name ? null : "Already have an account?"}
            <Text
              style={{ color: "#3A7F0D" }}
              onPress={() => navigation.navigate("Login")}>
              {" "}
              {name ? null : "Login"}
            </Text>
          </Text>
        </View>

        <View style={AuthStyle.horizontalSection}>
          <View style={AuthStyle.horizontalLine} />

          <View>
            <Text style={{ width: 40, textAlign: "center" }}>OR</Text>
          </View>

          <View style={AuthStyle.horizontalLine} />
        </View>

        <View style={{ marginTop: 50 }}>
          <Text
            style={{
              color: "#3A7F0D",
              textAlign: "center",
              paddingBottom: 15,
              fontSize: 18,
              fontWeight: "bold",
            }}>
            {name ? "Login with" : "Sign up with"}
          </Text>

          <Image
            source={require("./auth-imgs/google.png")}
            style={AuthStyle.imageStyle}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
