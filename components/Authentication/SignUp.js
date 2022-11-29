import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AuthStyle from "./AuthStyle";
import BlurImg from "./BlurImg";

export default function SignUp({ navigation, name, LogOtp, Forgot }) {
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const changeIcon = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <SafeAreaView style={{ marginTop: 100 }}>
        <ScrollView>
          <View style={AuthStyle.container}>
            <Text style={AuthStyle.title}>{name ? name : "Sign up"}</Text>

            <View>
              <Text style={AuthStyle.lebelText}>Mobile no</Text>

              <TextInput
                cursorColor="#3A7F0D"
                placeholder="+91 9876543210"
                style={AuthStyle.TextInput}
              />
            </View>

            <View>
              <Text style={AuthStyle.lebelText}>Password</Text>
              <TextInput
                placeholder="password"
                style={AuthStyle.TextInput}
                secureTextEntry={isPasswordSecure}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <Icon
                name={isPasswordSecure ? "eye-off-outline" : "eye-outline"}
                size={24}
                style={AuthStyle.iconstyle}
                onPress={changeIcon}
              />
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
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
