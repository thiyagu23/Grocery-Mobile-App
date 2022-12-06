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
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "../components/Authentication/AuthStyle";
import Icon from "react-native-vector-icons/Ionicons";

const CreateItems = () => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [price, setPrice] = useState();

  // const items = [];

  // const type = [
  //   {
  //     name: "apple",
  //     type: "Fruit",
  //     price: "$15",
  //   },
  //   {
  //     name: "mongo",
  //     type: "Fruit",
  //     price: "$15",
  //   },
  //   {
  //     name: "banana",
  //     type: "Fruit",
  //     price: "$15",
  //   },
  // ];
  // items.push(type);
  // console.log(items);
  const addClick = () => {
    console.log(name, type, price);
  };

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Create Items</Text>
          <View>
            <Text style={styles.lebelText}>Item Name</Text>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="eg. Apple"
              style={AuthStyle.TextInput}
              onChangeText={(text) => setName({ name: text })}
            />
          </View>
          <View>
            <Text style={styles.lebelText}>Item Type</Text>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="eg. Fruit"
              style={AuthStyle.TextInput}
              onChangeText={(text) => setType({ type: text })}
            />
          </View>
          <View>
            <Text style={styles.lebelText}>Item Price</Text>
            <TextInput
              keyboardType={"numeric"}
              cursorColor="#3A7F0D"
              placeholder="eg. $15.00"
              style={AuthStyle.TextInput}
              onChangeText={(text) => setPrice({ price: text })}
            />
          </View>
          <View>
            <Text style={styles.lebelText}>Item Image</Text>
            <TextInput
              cursorColor="#3A7F0D"
              placeholder="Upload Image"
              style={AuthStyle.TextInput}
              onChangeText={(text) => setValue(text)}
            />
          </View>
          <View style={{ flexDirection: "row", top: 15 }}>
            <TouchableOpacity style={styles.editBtn} onPress={addClick}>
              <Icon name="create-outline" size={23} color="#FFFFFF" />
              <Text style={styles.editTxt}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}>
              <Icon name="trash-outline" size={23} color="#3A7F0D" />
              <Text style={styles.deleteTxt}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreateItems;

const styles = StyleSheet.create({
  container: {
    marginVertical: 90,
    marginHorizontal: 20,
    borderColor: "#3A7F0D",
    borderRadius: 10,
    borderWidth: 3,
    height: 600,
    padding: 20,
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
  editBtn: {
    flexDirection: "row",
    backgroundColor: "#3A7F0D",
    borderRadius: 10,
    width: "40%",
    height: 50,
    paddingHorizontal: 40,
    paddingVertical: 12,
    left: 25,
  },
  editTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    paddingLeft: 5,
  },
  deleteBtn: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#3A7F0D",
    borderRadius: 10,
    width: "40%",
    height: 50,
    paddingHorizontal: 25,
    paddingVertical: 12,
    left: 40,
  },
  deleteTxt: {
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 5,
  },
});
