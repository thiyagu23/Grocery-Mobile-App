import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
const Settings = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <Text style={styles.heading}>Change Settings</Text>
      <View style={{ flexDirection: "row", top: 20 }}>
        <View>
          <Icon style={styles.icons} name="pencil" size={27} />
          <Icon style={styles.icons} name="notifications" size={27} />
          <Icon style={styles.icons} name="wallet" size={27} />
          <Icon style={styles.icons} name="person" size={27} />
        </View>
        <View>
          <Text style={styles.txt}>Edit Profile</Text>
          <Text style={styles.txt}>Notifications</Text>
          <Text style={styles.txt}>Payments</Text>
          <Text style={styles.txt}>Accounts</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Settings;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    paddingVertical: 16,
    fontWeight: "500",
  },
  icons: {
    paddingVertical: 14,
    marginHorizontal: 30,
  },
  heading: {
    color: "#336633",
    fontSize: 23,
    fontWeight: "bold",
    top: 20,
    marginLeft: 20,
    height: 50,
  },
});
