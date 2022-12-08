import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "../../components/Authentication/AuthStyle";

const Contact = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Get in Touch With Us !</Text>
        <View>
          <Text style={styles.lebelText}>Your Name </Text>
          <TextInput
            cursorColor="#3A7F0D"
            placeholder="Full Name"
            style={AuthStyle.TextInput}
          />
        </View>
        <View>
          <Text style={styles.lebelText}>Your Email Address</Text>
          <TextInput
            cursorColor="#3A7F0D"
            placeholder="Email"
            style={AuthStyle.TextInput}
          />
        </View>
        <View>
          <Text style={styles.lebelText}>Your Message</Text>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            cursorColor="#3A7F0D"
            placeholder="Type Here..."
            style={[AuthStyle.TextInput, { height: "50%" }]}
          />
        </View>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Send Message
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 30,
  },
  heading: {
    marginBottom: 20,
    color: "#3A7F0D",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 10,
    borderRadius: 50,
    height: 50,
  },
  lebelText: {
    paddingBottom: 5,
    color: "#0F8B32",
    fontWeight: "bold",
    fontSize: 15,
  },
  saveBtn: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    left: 40,
    bottom: 120,
    borderRadius: 10,
    backgroundColor: "#3A7F0D",
  },
});
