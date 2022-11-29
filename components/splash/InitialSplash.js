import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const InitialSplash = ({ navigation }) => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={styles.container}>
        <Image
          style={styles.img1}
          source={require("./initial-imgs/Top-img.png")}
        />
        <Text style={styles.txt}>
          Plants <Text style={{ color: "#3A7F0D" }}>Freshner</Text>
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.btnTxt}>Get Started</Text>
        </TouchableOpacity>
        <Image
          style={styles.img2}
          source={require("./initial-imgs/vegetable-picture.png")}
        />
      </View>
    </LinearGradient>
  );
};

export default InitialSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img1: {
    alignSelf: "center",
    marginTop: 150,
  },
  txt: {
    fontSize: 24,
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30,
  },
  img2: {
    alignSelf: "center",
    top: 240,
  },
  btn: {
    position: "absolute",
    bottom: 140,
    left: 80,
    width: 280,
    height: 50,
    backgroundColor: "#3A7F0D",
    borderRadius: 50,
  },
  btnTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
});
