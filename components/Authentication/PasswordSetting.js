import { TouchableOpacity, Text, View, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "./AuthStyle";
import BlurImg from "./BlurImg";

export default function PasswordSetting({ navigation }) {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <BlurImg />
      <View style={AuthStyle.container}>
        <View>
          <Text style={[AuthStyle.title, { marginBottom: 10 }]}>
            {" "}
            Create new password
          </Text>
        </View>

        <View style={{ marginVertical: 40 }}>
          <Text style={AuthStyle.lebelText}>New password</Text>

          <TextInput
            cursorColor="#3A7F0D"
            secureTextEntry={true}
            placeholder="password"
            style={[AuthStyle.TextInput, { marginBottom: 0 }]}
          />
        </View>

        <View>
          <Text style={AuthStyle.lebelText}>Confirm Password </Text>

          <TextInput
            cursorColor="#3A7F0D"
            secureTextEntry={true}
            placeholder="password"
            style={AuthStyle.TextInput}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={AuthStyle.loginBtn}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
