import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/Ionicons";

const slides = [
  {
    key: "s1",
    text: "Best Recharge offers",
    title: "Mobile Recharge",
    image: {
      uri: "./initial-imgs/top-view-veg.png",
    },
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Flight Booking",
    text: "Upto 25% off on Domestic Flights",
    image: {
      uri: "./initial-imgs/top-view-veg.png",
    },
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Great Offers",
    text: "Enjoy Great offers on our all services",
    image: {
      uri: "./initial-imgs/top-view-veg.png",
    },
    backgroundColor: "#22bcb5",
  },
];
const WalkThrough1 = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="play-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
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
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
        />
      )}
    </View>
  );
};

export default WalkThrough1;

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
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import Ionicons from "react-native-vector-icons/Ionicons";
// const WalkThrough1 = ({ navigation }) => {
//   return (
//     <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
//       <View style={styles.container}>
//         <Text>WalkThrough1</Text>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => navigation.navigate("WalkThrough2")}>
//           <Text style={styles.btnTxt}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// export default WalkThrough1;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignSelf: "center",
//   },
//   btn: {
//     position: "absolute",
//     bottom: 140,

//     width: 280,
//     height: 50,
//     backgroundColor: "green",
//     borderRadius: 50,
//   },
//   btnTxt: {
//     fontSize: 20,
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontWeight: "bold",
//     marginTop: 10,
//   },
// });
