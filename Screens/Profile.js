import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const Profile = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View>
        <Text>Profile</Text>
      </View>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({});
