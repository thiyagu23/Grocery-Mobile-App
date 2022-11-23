import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthStyle from "./AuthStyle";
const TextInput = () => {
  return (
    <View>
      <TextInput
        cursorColor="#3A7F0D"
        keyboardType={"numeric"}
        placeholder="Mobile no"
        style={AuthStyle.TextInput}
        secureTextEntry={true}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
