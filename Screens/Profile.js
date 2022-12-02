import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";

import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../Redux/action";
const Profile = ({ navigation }) => {
  const { theme } = useSelector((state) => state.themeReducer);

  const dispatch = useDispatch();
  const changeTheme = () => {
    if (theme == "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };
  const Data = [
    {
      id: 1,
      name: <Text onPress={() => navigation.navigate("Table")}>My Order</Text>,
      logo: <Image source={require("./Data-imgs/my-order.png")} />,
      arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
    },
    {
      id: 2,
      name: "Delivery Address",
      logo: <Image source={require("./Data-imgs/location.png")} />,
      arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
    },
    {
      id: 3,
      name: "Settings",
      logo: <Image source={require("./Data-imgs/settings.png")} />,
      arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
    },
    {
      id: 4,
      name: "Help Center",
      logo: <Image source={require("./Data-imgs/help.png")} />,
      arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
    },
    {
      id: 5,
      name: <Text onPress={() => changeTheme()}>Contact Us</Text>,
      logo: <Image source={require("./Data-imgs/email.png")} />,
      arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
    },
  ];

  // style={{ color: theme == "light" ?   "white" : "black"}}

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={[AppStyle.container]}>
        <Text style={{ fontSize: 28, padding: 15 }}>
          Hello,
          <Text style={{ fontWeight: "bold", color: "#3A7F0D" }}> User</Text>
        </Text>
        <Text
          style={{
            fontSize: 19,
            paddingLeft: 15,
            marginBottom: 20,
            fontWeight: "500",
          }}>
          +91 9876543210
        </Text>
        <View>
          <FlatList
            contentContainerStyle={{}}
            data={Data}
            renderItem={({ item }) => (
              <TouchableOpacity style={AppStyle.profile}>
                <Text style={AppStyle.ProfileLogo}>{item.logo}</Text>
                <Text style={AppStyle.ProfileName}>{item.name}</Text>
                <Text style={AppStyle.ProfileArrow}>{item.arrow}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={AppStyle.logoutBtn}
            onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              LogOut
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
export default Profile;

const styles = StyleSheet.create({});

const Data = [
  {
    id: 1,
    name: <Text>My Order</Text>,
    logo: <Image source={require("./Data-imgs/my-order.png")} />,
    arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
  },
  {
    id: 2,
    name: "Delivery Address",
    logo: <Image source={require("./Data-imgs/location.png")} />,
    arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
  },
  {
    id: 3,
    name: "Settings",
    logo: <Image source={require("./Data-imgs/settings.png")} />,
    arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
  },
  {
    id: 4,
    name: "Help Center",
    logo: <Image source={require("./Data-imgs/help.png")} />,
    arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
  },
  {
    id: 5,
    name: "Contact Us",
    logo: <Image source={require("./Data-imgs/email.png")} />,
    arrow: <Image source={require("./Data-imgs/right-arrow.png")} />,
  },
];
