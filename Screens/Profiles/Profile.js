import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "../AppStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../Redux/action";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ navigation }) => {
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
      name: (
        <Text onPress={() => navigation.navigate("Table")}>
          {"My Orders            "}
        </Text>
      ),
      logo: (
        <Icon
          onPress={() => navigation.navigate("Table")}
          name="albums"
          size={25}
        />
      ),
      arrow: (
        <Image
          onPress={() => navigation.navigate("Table")}
          source={require("../Data-imgs/right-arrow.png")}
        />
      ),
    },
    {
      id: 2,
      name: (
        <Text onPress={() => navigation.navigate("CreateItems")}>
          {"Create Items       "}
        </Text>
      ),
      logo: (
        <Icon
          onPress={() => navigation.navigate("CreateItems")}
          name="create"
          size={25}
        />
      ),
      arrow: <Image source={require("../Data-imgs/right-arrow.png")} />,
    },
    {
      id: 3,
      name: (
        <Text onPress={() => navigation.navigate("Address")}>
          {"Delivery Address"}
        </Text>
      ),
      logo: (
        <Icon
          onPress={() => navigation.navigate("Address")}
          name="location"
          size={25}
        />
      ),
      arrow: <Image source={require("../Data-imgs/right-arrow.png")} />,
    },
    {
      id: 4,
      name: (
        <Text onPress={() => navigation.navigate("Settings")}>
          {"Settings               "}
        </Text>
      ),
      logo: (
        <Icon
          onPress={() => navigation.navigate("Settings")}
          name="settings"
          size={25}
        />
      ),
      arrow: <Image source={require("../Data-imgs/right-arrow.png")} />,
    },

    {
      id: 6,
      name: (
        <Text onPress={() => navigation.navigate("Contact")}>
          {"Contact Us          "}
        </Text>
      ),
      logo: (
        <Icon
          onPress={() => navigation.navigate("Contact")}
          name="mail"
          size={25}
        />
      ),
      arrow: <Image source={require("../Data-imgs/right-arrow.png")} />,
    },
  ];
  // onPress={() => changeTheme()}
  // style={{ color: theme == "light" ?   "white" : "black"}}

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <View style={[AppStyle.container]}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.logo}>{nameLogo}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 25, paddingTop: 30, left: 15 }}>
            Hello,
            <Text style={{ fontWeight: "600", color: "#3A7F0D" }}>
              {" "}
              {userName}
            </Text>
          </Text>
        </View>
        <Text
          style={{
            fontSize: 19,

            left: 100,
            marginBottom: 20,
            fontWeight: "500",
          }}>
          {`+91 ${userNum}`}
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
            onPress={() => navigation.navigate("SignUp")}>
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

const styles = StyleSheet.create({
  logo: {
    top: 20,
    flexDirection: "row",
    backgroundColor: "#cde7cd",
    width: 80,
    height: 80,
    borderRadius: 100,
    textAlign: "center",
    paddingTop: 15,
    fontSize: 35,
    fontWeight: "bold",
    color: "#336633",
  },
});
