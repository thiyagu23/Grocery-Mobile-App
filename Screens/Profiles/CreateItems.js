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
  Pressable,
  SafeAreaViewComponent,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AuthStyle from "../../components/Authentication/AuthStyle";
import Icon from "react-native-vector-icons/Ionicons";

const CreateItems = ({closeModal}) => {
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
   
   <ScrollView> 
     <View style={{backgroundColor:"#F5F5F5",opacity:0.7, height:900 }}>
      </View>

     <View style={styles.container}>
        <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%", borderRadius: 17 }}>
       <TouchableOpacity onPress={closeModal}>
         <Icon name="close" size={35} color="#3A7F0D" style={{alignSelf: "flex-end", padding:15}}/>
       </TouchableOpacity>
      
      <Text style={styles.heading}>Create Items</Text>
      <View style={{ padding:25, bottom:35 }}>
      <View>
      <Text style={styles.lebelText}>Item Name</Text>
      <TextInput
        cursorColor="#3A7F0D"
        placeholder="eg. Apple"
        style={AuthStyle.TextInput}
        onChangeText={(text) => setName({ text })}
        value={name}
      />
    </View>
    <View>
      <Text style={styles.lebelText}>Item Type</Text>
      <TextInput
        cursorColor="#3A7F0D"
        placeholder="eg. Fruit"
        style={AuthStyle.TextInput}
        onChangeText={(text) => setType({  text })}
        value={type}
      />
    </View>
    <View>
      <Text style={styles.lebelText}>Item Price</Text>
      <TextInput
        keyboardType={"numeric"}
        cursorColor="#3A7F0D"
        placeholder="eg. $15.00"
        style={AuthStyle.TextInput}
        onChangeText={(text) => setPrice({  text })}
        value={price}

      />
    </View>
      <View>
        <Text style={styles.lebelText}>Item Image</Text>
        <TextInput
          cursorColor="#3A7F0D"
          placeholder="Upload Image"
          style={AuthStyle.TextInput}
          onChangeText={(text) => setAddData(text)}
        />
      </View>
      
      <View style={{ flexDirection: "row", top: 10 }}>
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
      </LinearGradient>   
       
      </View>
      </ScrollView>  
      

  );
};

export default CreateItems;

const styles = StyleSheet.create({
  container: {
   bottom:750,
    marginHorizontal: 25,
    borderColor: "#3A7F0D",
    borderRadius: 20,
    borderWidth: 3,
    height: 600,
   
    
    
  },
  heading: {
    color: "#3A7F0D",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    height: 50,
    bottom:20
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
