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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp({ navigation, name, MainPage, Forgot, SignUp }) {
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [mobile, setMobile] = useState("");
  const [mobileValidation, setMobileValidation] = useState(false);
  const [userName, setUserName] = useState("");

  const changeIcon = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  const handleCheckMoblie = async (text) => {
    let cek = /^(?=.*[0-9]{10}).*$/;
    setMobile(text);
    try {
      await AsyncStorage.setItem("UserNum", mobile);
    } catch (error) {
      console.log(error);
    }
    if (cek.test(text)) {
      setMobileValidation(false);
    } else {
      setMobileValidation(true);
    }
  };
  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }
    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }
    return null;
  };

  const handleLogin = async () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      try {
        await AsyncStorage.setItem("UserName", userName);
        navigation.navigate("Otp");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(checkPassword);
    }
  };

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <SafeAreaView style={{ marginTop: 100 }}>
        <ScrollView>
          <View style={AuthStyle.container}>
            <Text style={AuthStyle.title}>{name ? name : "Sign up"}</Text>
            {name ? (
              ""
            ) : (
              <View>
                <Text style={AuthStyle.lebelText}>Name</Text>
                <TextInput
                  cursorColor="#3A7F0D"
                  placeholder="Enter your name"
                  style={AuthStyle.TextInput}
                  onChangeText={(value) => setUserName(value)}
                />
              </View>
            )}

            <View>
              <Text style={AuthStyle.lebelText}>Mobile no</Text>
              <TextInput
                onChangeText={(text) => handleCheckMoblie(text)}
                value={mobile}
                cursorColor="#3A7F0D"
                placeholder="+91 9876543210"
                style={AuthStyle.TextInput}
              />
            </View>
            {mobileValidation ? (
              <Text style={{ color: "red", textAlign: "right" }}>
                Enter Valid Mobile Number
              </Text>
            ) : null}

            <View>
              <Text style={AuthStyle.lebelText}>Password</Text>
              <TextInput
                variant="rounded"
                marginX={10}
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
              {mobile.length < 10 ||
              password.length < 8 ||
              setMobileValidation == true ? (
                <TouchableOpacity disabled style={AuthStyle.disabledLoginBtn}>
                  <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    {name ? "Login" : "Get OTP"}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={MainPage ? () => MainPage() : handleLogin}
                  // onPress={handleLogin}
                  style={AuthStyle.loginBtn}>
                  <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    {name ? "Login" : "Get OTP"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={AuthStyle.accountHave}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {name ? "Don't have an account?" : null}
                <Text
                  style={{ color: "#3A7F0D" }}
                  onPress={
                    SignUp
                      ? () => SignUp()
                      : () => navigation.navigate("SignUp")
                  }>
                  {"  "}
                  {name ? "Sign Up" : null}
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
