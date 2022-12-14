import {
  StyleSheet,
  Text,
  View,
  LogBox,
  Button,
  DrawerLayoutAndroid,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Screens/Home";
import Save from "./Screens/Save";
import Cart from "./Screens/Cart";
import Profile from "./Screens/Profiles/Profile";
import LogoTitle from "./Screens/LogoTitle";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./Screens/AppStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
  const [userNum, setUserNum] = useState("");
  const [userName, setUserName] = useState("");
  const [nameLogo, setNameLogo] = useState("");

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          setUserName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          const frstInd = value.split("");
          setNameLogo(frstInd[0]);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("UserNum").then((value) => {
        if (value != null) {
          setUserNum(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const drawer = useRef(null);
  const navigationView = () => (
    //----- Drawer component-----//

    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.logo}>{nameLogo}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingTop: 35, left: 10 }}>
            Hello,
            <Text style={{ fontWeight: "600", color: "#3A7F0D" }}>
              {" "}
              {userName}
            </Text>
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 20,
            fontWeight: "500",
            left: 35,
            top: 10,
          }}>
          Premium User
        </Text>
        <View
          style={{
            width: "90%",
            borderWidth: 1,
            top: 10,
            borderColor: "#336633",
          }}
        />
        <Text style={styles.txt}>
          Plants <Text style={{ color: "#3A7F0D" }}>Freshner</Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={styles.img}
              source={require("./Screens/Data-imgs/drawer-veg.png")}
            />
            <Image
              style={styles.img}
              source={require("./Screens/Data-imgs/drawer-fruits.png")}
            />
            <Ionicons
              style={styles.img}
              name="leaf-outline"
              size={25}
              color="#3A7F0D"
            />
            <Ionicons
              style={styles.img}
              name="file-tray-outline"
              size={25}
              color="#3A7F0D"
            />
          </View>
          <View>
            <Text style={styles.paragraph}>Vegtables</Text>
            <Text style={styles.paragraph}>Fruits</Text>
            <Text style={styles.paragraph}>Plants</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Table")}>
              <Text style={styles.paragraph}>My Orders</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[AppStyle.logoutBtn, { top: 350, width: 150, height: 45 }]}
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            LogOut
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  //-----Home page bottom navigation-----//

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
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
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                <Image
                  style={{ left: 15 }}
                  source={require("./Screens/Data-imgs/Vector-left.png")}
                />
              </TouchableOpacity>
              // <Button
              //   onPress={() => drawer.current.openDrawer()}
              //   title="Info"
              //   color="#fff"
              // />
            ),
          }}
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
    </DrawerLayoutAndroid>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: 30,
  },
  navigationContainer: {
    backgroundColor: "#FFFFFF",
  },
  paragraph: {
    marginLeft: 40,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  txt: {
    fontSize: 25,
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 40,
  },
  icon: {
    top: 20,
    left: 10,
  },
  logo: {
    top: 30,
    flexDirection: "row",
    backgroundColor: "#cde7cd",
    width: 60,
    height: 60,
    borderRadius: 100,
    textAlign: "center",
    paddingTop: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#336633",
    right: 10,
  },
  img: {
    marginVertical: 12,
    size: 20,
  },
});
