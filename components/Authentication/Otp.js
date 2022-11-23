import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React from "react";
import AuthStyle from "./AuthStyle";
import { LinearGradient } from "expo-linear-gradient";
import BlurImg from "./BlurImg";

export default function Otp({ navigation }) {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <BlurImg />
      <View style={AuthStyle.container}>
        <View style={AuthStyle.otpVerify}>
          <Text style={AuthStyle.title}>OTP Verification</Text>

          <Text style={AuthStyle.verificationText}>
            Please enter the verification code that was sent to your number
          </Text>
        </View>
        <View>
          <View style={AuthStyle.otpBoxContainer}>
            <TextInput style={AuthStyle.otpBox}> </TextInput>

            <TextInput style={AuthStyle.otpBox}> </TextInput>

            <TextInput style={AuthStyle.otpBox}> </TextInput>

            <TextInput style={AuthStyle.otpBox}> </TextInput>
          </View>

          <View style={AuthStyle.otpTimer}>
            <Text style={AuthStyle.otpText}>00:56</Text>

            <Text style={AuthStyle.otpText}>Resend OTP</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
            style={AuthStyle.loginBtn}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
