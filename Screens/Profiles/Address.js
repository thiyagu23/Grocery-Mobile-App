import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "../../components/Authentication/AuthStyle";
import Icon from "react-native-vector-icons/Ionicons";
const Address = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Enter Your Address
          </Text>
          <View>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="Full Name*"
              style={AuthStyle.TextInput}
            />
          </View>
          <View>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="Mobile Number*"
              style={AuthStyle.TextInput}
            />
          </View>
          <View>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="Building No, Street, Area Address*"
              style={AuthStyle.TextInput}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TextInput
              keyboardType={"numeric"}
              cursorColor="#3A7F0D"
              placeholder="PinCode*"
              style={[AuthStyle.TextInput, { width: "45%" }]}
            />

            <TouchableOpacity style={styles.locatBtn}>
              <Icon name="locate" size={20} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  left: 5,
                }}>
                Use My Location
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="State*"
              style={[AuthStyle.TextInput, { width: "45%" }]}
            />
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="City*"
              style={[AuthStyle.TextInput, { width: "45%" }]}
            />
          </View>

          <View
            style={{
              top: 10,
            }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Type of Address
            </Text>
            <View
              style={{
                flexDirection: "row",
                margin: 15,
                right: 10,
                alignContent: "flex-end",
              }}>
              <TouchableOpacity style={styles.homeBtn}>
                <Icon name="home" size={20} />
                <Text style={{ fontSize: 15, fontWeight: "bold", left: 5 }}>
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.officeBtn}>
                <Icon name="business" size={20} />
                <Text style={{ fontSize: 15, fontWeight: "bold", left: 5 }}>
                  Office
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.saveBtn}>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                  Save Address
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  homeBtn: {
    flexDirection: "row",
    width: "30%",
    height: 35,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#3A7F0D",
  },
  officeBtn: {
    flexDirection: "row",
    width: "30%",
    height: 35,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderColor: "#3A7F0D",
  },
  saveBtn: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    left: 40,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: "#3A7F0D",
  },
  locatBtn: {
    flexDirection: "row",
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,

    backgroundColor: "#3A7F0D",
  },
});
