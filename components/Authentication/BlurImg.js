import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BlurImg = () => {
  return (
    <View>
      <Image
        style={styles.img1}
        source={require("./auth-imgs/fresh-broccoli-vegetable.png")}
      />
      <Image style={styles.img2} source={require("./auth-imgs/tomatoes.png")} />
    </View>
  );
};

export default BlurImg;

const styles = StyleSheet.create({
  img1: {
    position: "absolute",
    width: 111,
    height: 75,
    left: 10,
    bottom: 1,
  },
  img2: {
    position: "absolute",
    width: 91,
    height: 92,
    left: 269,
    top: 650,
  },
});
