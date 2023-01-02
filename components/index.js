import { StyleSheet, Text, View, TouchableOpacity,Pressable,   Modal, ScrollView, } from "react-native";
import React, {useState} from "react";
import InitialSplash from "./splash/InitialSplash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import Otp from "./Authentication/Otp";
import ForgotPassword from "./Authentication/ForgotPassword";
import PasswordSetting from "./Authentication/PasswordSetting";
import Main from "../Main";
import Table from "../Screens/Profiles/Table";
import CreateItems from "../Screens/Profiles/CreateItems";
import Address from "../Screens/Profiles/Address";
import Settings from "../Screens/Profiles/Settings";
import HelpCenter from "../Screens/Profiles/HelpCenter";
import Contact from "../Screens/Profiles/Contact";
import Payment from "../Screens/Payment";
import Notification from "../Notification";
import PlaceOrder from "../Screens/PlaceOrder";
import Icon from "react-native-vector-icons/Ionicons";

 
const Stack = createNativeStackNavigator();

const Splash = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(!modalVisible)
  };

  return (
    <>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="InitialSplash" component={InitialSplash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordSetting" component={PasswordSetting} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="Table"
        component={Table}
        options={{
          title: "My Items",
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={showModal}>
              <Icon
                // style={styles.createIcon}
                name="create-outline"
                size={34}
                color="#3A7F0D"
                style={{ paddingRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CreateItems"
        component={CreateItems}
        options={{
          title: "Create Item",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          title: "Add Delivery Address",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          title: "Help Center",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "Contact Us",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: "Payment Gateway",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notifications",
          headerShown: true,
        }}
      />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
    </Stack.Navigator>

{
    modalVisible && (
      <Modal animationType="slide"
      transparent={true} modalVisible={modalVisible}>
      <CreateItems closeModal = {showModal}/>
      </Modal>
      )
}

    </>
  );
  
};


export default Splash;
