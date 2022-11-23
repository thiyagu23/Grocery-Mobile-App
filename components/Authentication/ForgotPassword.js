import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "./AuthStyle";
import BlurImg from "./BlurImg";

export default function ForgotPassword({ navigation }) {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <BlurImg />
      <View style={AuthStyle.container}>
        <View>
          <Text style={AuthStyle.title}> Forgot your password? </Text>

          <Text style={AuthStyle.verificationText}>
            Please enter the verification code that was sent to your number
          </Text>
        </View>
        <View style={{ marginVertical: 40 }}>
          <Text style={AuthStyle.lebelText}>Mobile no</Text>

          <TextInput
            cursorColor="#3A7F0D"
            keyboardType={"numeric"}
            placeholder="Mobile no"
            style={AuthStyle.TextInput}
          />

          <Text
            style={[AuthStyle.inputFieldBaseText, { paddingLeft: "53%" }]}
            onPress={() => navigation.navigate("PasswordSetting")}>
            Create New Password
          </Text>
        </View>

        <View>
          <TouchableOpacity style={AuthStyle.loginBtn}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
