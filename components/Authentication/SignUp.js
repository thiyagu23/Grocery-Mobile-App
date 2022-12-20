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
import axios from "axios";
import Login from "./Login";
export default function SignUp({ navigation, name, MainPage, Forgot, SignUp }) {
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [mobile, setMobile] = useState("");
  const [mobileValidation, setMobileValidation] = useState(false);
  const [userName, setUserName] = useState("");
  const [invalid, setInvalid] = useState(true);

  const changeIcon = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  const handleCheckMoblie = async (text) => {
    let cek = /^(?=.*[0-9]{10}).*$/;
    setMobile(text);
    // try {
    //   await AsyncStorage.setItem("UserNum", mobile);
    // } catch (error) {
    //   console.log(error);
    // }
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

  const signinHandle = async () => {
    console.log(userName, mobile, password);

    let obj =
      "phNum=" +
      mobile +
      "&name=" +
      userName +
      "&password=" +
      password +
      "&type=cart";
    const results = await axios("https://fioritest.avaniko.com/User/AddUser ", {
      method: "POST",
      data: obj,
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.response.data.error));
    // await AsyncStorage.setItem("UserName", result.data.UserName);
    // await AsyncStorage.setItem("UserNum", result.data.PhoneNumber);
    navigation.navigate("Otp");
  };

  // await AsyncStorage.setItem("UserName", userName);
  // await AsyncStorage.setItem("UserNum", mobile);
  // navigation.navigate("Otp");
  // const checkPassword = checkPasswordValidity(password);
  // if (!checkPassword) {
  //   try {

  //   } catch (error) {
  //     console.log(error);
  //   }
  // } else {
  //   alert(checkPassword);
  // }
  const loginHandle = async () => {
    console.log(mobile, password);

    let data =
      "userName=" +
      mobile +
      "&password=" +
      password +
      "&grant_type=password&Type=cart";
    const result = await axios("https://fioritest.avaniko.com/login  ", {
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      //.then((res) => console.log(res.data))
      .catch((error) => setInvalid(error.response.data.error));

    await AsyncStorage.setItem("UserName", result.data.UserName);
    await AsyncStorage.setItem("UserNum", result.data.PhoneNumber);
    if (MainPage) {
      MainPage();
    } else {
      navigation.navigate("Main");
    }
    // console.log(result.data.PhoneNumber);

    // result = await result.json();
    // if (result.status) {
    //   setInvalid(false);
    // } else {
    //   setInvalid(true);
    // }
    // console.log(result.);
  };

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <SafeAreaView style={{ marginTop: 100 }}>
        <ScrollView>
          <View style={AuthStyle.container}>
            <Text style={AuthStyle.title}>{name ? name : "Sign up"}</Text>
            {invalid ? (
              <Text
                style={{
                  color: "#e00303",
                  textAlign: "center",
                  bottom: 20,
                  fontSize: 15,
                }}
              >
                {name ? invalid : null}
              </Text>
            ) : null}
            {name ? null : (
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
                keyboardType={"numeric"}
                value={mobile}
                cursorColor="#3A7F0D"
                placeholder="Mobile Number "
                style={AuthStyle.TextInput}
              />
            </View>
            {mobileValidation ? (
              <Text style={{ color: "#e00303", textAlign: "right" }}>
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
              style={AuthStyle.inputFieldBaseText}
            >
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
                  // onPress={  : handleLogin}
                  // ? callingApi : handleLogin
                  onPress={name ? loginHandle : signinHandle}
                  style={AuthStyle.loginBtn}
                >
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
                  }
                >
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
                }}
              >
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
