import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import Splash from "../index";
const WalkThrough = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    return setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <LinearGradient colors={["#99de81", "#99de81"]} style={{ height: "100%" }}>
      {showRealApp ? (
        <Splash />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </LinearGradient>
  );
};

export default WalkThrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  introImageStyle: {
    width: 230,
    height: 230,
    borderRadius: 150,
    top: 100,
  },
  introTextStyle: {
    fontSize: 23,
    color: "black",
    textAlign: "center",
    paddingVertical: 30,
    fontWeight: "500",
    width: "90%",
    lineHeight: 30,
  },
  introTitleStyle: {
    fontSize: 30,
    color: "#3A7F0D",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
    width: "50%",
    lineHeight: 40,
    top: 50,
  },
});

const slides = [
  {
    key: "s1",
    title: "Welcome to plants Fresher",
    text: "Fresh vegetables and plants starting from just 10Rs",
    image: require("./initial-imgs/slider1.png"),
  },
  {
    key: "s2",
    title: "fast delivery at your doorstep",
    text: "Home delivery and online shopping available here",
    image: require("./initial-imgs/slider2.png"),
  },
  {
    key: "s3",
    title: "Peace of mind same day delivery",
    text: "Home delivery and online shopping available here",
    image: require("./initial-imgs/slider3.png"),
  },
];
