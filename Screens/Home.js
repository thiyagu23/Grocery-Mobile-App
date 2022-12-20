import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  Alert,
  VirtualizedList,
  RefreshControl,
  DrawerLayoutAndroid,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";
import { responsiveWidth, responsiveHeight } from "../responsive";
import { Data } from "./Data";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { addToCart } from "../Redux/cartSlice";

const Home = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState([...Data]);
  const [mastersearchTerm, setmasterSearchTerm] = useState([...Data]);
  // const [addToCart, setAddToCart] = useState(true);

  const dispatch = useDispatch();

  // const addToCartClick = () => {
  //   setAddToCart(!addToCart);
  // };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    // Alert.alert(
    //   "Add to Cart",
    //   `Do you want to add ${item.name} to your cart ?`,
    //   [
    //     { text: "Yes", onPress: () => navigation.navigate("Cart") },
    //     { text: "No" },
    //   ]
    // );
    Toast.show({
      type: "success",
      text1: `Hello Thanks for contacting`,
      text2: "We will get back to you soon!!👋",
    });
    // console.log(rrr);
  };
  const searchFilterFunction = (text) => {
    if (text.length >= 3) {
      const filteredData = Data.filter((data) => {
        if (data.name.toUpperCase().includes(text.toUpperCase())) {
          return data;
        }
      });
      setSearchTerm(filteredData);
    } else {
      setSearchTerm(mastersearchTerm);
    }
  };

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView refreshControl={<RefreshControl />}>
        <View
          style={[
            AppStyle.container,
            // { width: responsiveWidth(414), height: responsiveHeight(1300) },
          ]}
        >
          <TextInput
            style={AppStyle.search}
            placeholder="Search"
            onChangeText={(e) => searchFilterFunction(e)}
          />

          <Image
            style={{ alignSelf: "flex-end", bottom: 55, right: 35 }}
            source={require("./Data-imgs/search.png")}
          />

          <TouchableOpacity style={AppStyle.topCard}>
            <LinearGradient
              colors={["#F5F5F5", "#d4ebcf"]}
              style={{
                height: "100%",
                borderRadius: 15,
              }}
            >
              <Text style={AppStyle.title}>
                Enjoy the special offer up to 30%
              </Text>
              <Text
                style={{
                  color: "#7B7B7B",
                  fontSize: 16,
                  left: 20,
                  top: -10,
                }}
              >
                At sep 12 - sep 20{" "}
              </Text>
              <Image
                style={{ alignSelf: "flex-end", bottom: 70, right: 30 }}
                source={require("./Data-imgs/fruits.png")}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 22, fontWeight: "600", paddingVertical: 15 }}
          >
            Recent Viewed
          </Text>
          <ScrollView horizontal={true}>
            <View style={AppStyle.middelCard}>
              <TouchableOpacity style={AppStyle.itemsHori}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={require("./Data-imgs/apples.jpg")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                >
                  {" "}
                  Apples
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={AppStyle.itemsHori}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={require("./Data-imgs/oranges.jpg")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                >
                  Oranges
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={AppStyle.itemsHori}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={require("./Data-imgs/tomatoess.jpg")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                >
                  Tomatoes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={AppStyle.itemsHori}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={require("./Data-imgs/onionss.jpg")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                >
                  Onions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={AppStyle.itemsHori}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={require("./Data-imgs/grapess.jpg")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                >
                  Grapes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={AppStyle.itemsHori}>
                <Image
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={require("./Data-imgs/pumpkin.png")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    textAlign: "center",
                    paddingTop: 10,
                  }}
                >
                  Pumpkin
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Text
            style={{ fontSize: 22, fontWeight: "600", paddingVertical: 15 }}
          >
            All Groceries
          </Text>
          <View>
            <FlatList
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={searchTerm}
              numColumns={3}
              renderItem={({ item, index }) => (
                <View style={AppStyle.card}>
                  {item.img}
                  <Text style={AppStyle.cardText}>{item.name}</Text>
                  <Text style={AppStyle.homePrice}>${item.price}</Text>
                  <TouchableOpacity
                    style={AppStyle.addToCart}
                    onPress={() => handleAddToCart(item)}
                  >
                    <Text style={AppStyle.addToCartTxt}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
