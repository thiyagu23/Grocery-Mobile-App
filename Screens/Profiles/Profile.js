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
import Gradient from "../../Gradient";

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

  //---Dark Mode ---

  // const { theme } = useSelector((state) => state.themeReducer);
  // const dispatch = useDispatch();
  // const changeTheme = () => {
  //   if (theme == "light") {
  //     dispatch(setTheme("dark"));
  //   } else {
  //     dispatch(setTheme("light"));
  //   }
  // };
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
          <TouchableOpacity
            style={AppStyle.profile}
            onPress={() => navigation.navigate("Table")}>
            <Icon style={AppStyle.ProfileLogo} name="albums" size={25} />
            <Text style={AppStyle.ProfileName}>{"My Items             "}</Text>
            <Image
              style={AppStyle.ProfileArrow}
              source={require("../Data-imgs/right-arrow.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={AppStyle.profile}
            onPress={() => navigation.navigate("Address")}>
            <Icon style={AppStyle.ProfileLogo} name="location" size={25} />
            <Text style={AppStyle.ProfileName}>Delivery Address</Text>
            <Image
              style={AppStyle.ProfileArrow}
              source={require("../Data-imgs/right-arrow.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={AppStyle.profile}
            onPress={() => navigation.navigate("Settings")}>
            <Icon style={AppStyle.ProfileLogo} name="settings" size={25} />
            <Text style={AppStyle.ProfileName}>
              {"Settings                "}
            </Text>
            <Image
              style={AppStyle.ProfileArrow}
              source={require("../Data-imgs/right-arrow.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={AppStyle.profile}
            onPress={() => navigation.navigate("Contact")}>
            <Icon style={AppStyle.ProfileLogo} name="mail" size={25} />
            <Text style={AppStyle.ProfileName}>{"Contact Us           "}</Text>
            <Image
              style={AppStyle.ProfileArrow}
              source={require("../Data-imgs/right-arrow.png")}
            />
          </TouchableOpacity>
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
// <TouchableOpacity
//             style={AppStyle.profile}
//             onPress={() => navigation.navigate("CreateItems")}>
//             <Icon style={AppStyle.ProfileLogo} name="create" size={25} />
//             <Text style={AppStyle.ProfileName}>{"Create Items       "}</Text>
//             <Image
//               style={AppStyle.ProfileArrow}
//               source={require("../Data-imgs/right-arrow.png")}
//             />
//           </TouchableOpacity>
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
// <FlatList
//   contentContainerStyle={{}}
//   data={Data}
//   renderItem={({ item }) => (
// <TouchableOpacity>
//   <Text style={AppStyle.ProfileLogo}>{item.logo}</Text>
//   <Text style={AppStyle.ProfileName}>{item.name}</Text>
//   <Text >{item.arrow}</Text>
// </TouchableOpacity>;
//   )}
// />
