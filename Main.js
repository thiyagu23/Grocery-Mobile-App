import { StyleSheet, Text, View, LogBox } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Screens/Home";
import Save from "./Screens/Save";
import Cart from "./Screens/Cart";
import Profile from "./Screens/Profile";
import LogoTitle from "./Screens/LogoTitle";

const Tab = createBottomTabNavigator();

export default function Main() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Save") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={"#068E2C"} />;
        },
        tabBarActiveTintColor: "#068E2C",
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "My Cart",
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Save"
        component={Save}
        options={{
          title: "Wishlist",
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
