import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "../components/Authentication/AuthStyle";

const Home = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View>
        <TextInput styles={AuthStyle.search} placeholder="Search" />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({});
