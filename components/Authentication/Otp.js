import {
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import AuthStyle from "./AuthStyle";
import { LinearGradient } from "expo-linear-gradient";
import BlurImg from "./BlurImg";

export default function Otp({ navigation }) {
  const inputRef = useRef([]);
  const [otp, setOtp] = useState([]);
  const focusNext = (value, index) => {
    if (index < 3 && value) {
      inputRef.current[index + 1].focus();
    }
    if (index === otp.length - 1) {
      inputRef.current[index].blur();
    }
    otp[index] = value;
    setOtp([...otp]);
  };
  const focusPrevious = (key, index) => {
    if (key === "Backspace" && index !== 0) inputRef.current[index - 1].focus();
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate("Main");
    }, 1000);
  };
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
            {Array(4)
              .fill("_")
              .map((item, index) => {
                return (
                  <TextInput
                    textContentType="password"
                    ml={"4"}
                    width={"12"}
                    size={"lg"}
                    cursorColor="#3A7F0D"
                    onKeyPress={(e) => focusPrevious(e.nativeEvent.key, index)}
                    onChangeText={(value) => focusNext(value, index)}
                    ref={(el) => (inputRef.current[index] = el)}
                    maxLength={1}
                    keyboardType={"numeric"}
                    selectionColor="#3A7F0D"
                    key={index}
                    style={[AuthStyle.otpBox]}
                  />
                );
              })}
          </View>

          <View style={AuthStyle.otpTimer}>
            <Text style={AuthStyle.otpText}>00:56</Text>

            <Text style={AuthStyle.otpText}>Resend OTP</Text>
          </View>
        </View>
        <Modal animationType="fade" transparent visible={modalVisible}>
          <View style={styles.card}>
            <Image source={require("./auth-imgs/checkmark.png")} />
            <Text
              style={{ fontSize: 20, color: "#232323", fontWeight: "bold" }}>
              Successfully Verified !
            </Text>
          </View>
        </Modal>
        <View>
          <TouchableOpacity
            onPress={() => {
              showModal();
            }}
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

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 300,
    left: 70,
    borderRadius: 20,
    width: 252,
    height: 250,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    margin: 25,
  },
});
