import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InitialSplash from "./splash/InitialSplash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import Otp from "./Authentication/Otp";
import ForgotPassword from "./Authentication/ForgotPassword";
import PasswordSetting from "./Authentication/PasswordSetting";
import Main from "../Main";
import Table from "../Screens/Table";
import CreateItems from "../Screens/CreateItems";

const Stack = createNativeStackNavigator();

const Splash = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Initial Splash" component={InitialSplash} />
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
          title: "My Orders",
          headerShown: true,
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
    </Stack.Navigator>
  );
};

export default Splash;
