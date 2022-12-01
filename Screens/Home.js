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
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";
const Data = [
  {
    id: 1,
    name: "Apple",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/apples.jpg")}
      />
    ),
  },
  {
    id: 2,
    name: "Beetroot",
    img: (
      <Image
        style={{
          height: 110,
          width: 110,
          borderRadius: 10,
        }}
        source={require("./Data-imgs/Beetroot.png")}
      />
    ),
  },
  {
    id: 3,
    name: "Brinjal",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/brinjal.png")}
      />
    ),
  },
  {
    id: 4,
    name: "Carrot",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/carrot.png")}
      />
    ),
  },
  {
    id: 5,
    name: "Grapes",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/grapes.png")}
      />
    ),
  },
  {
    id: 6,
    name: "Green-chilli",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/green-chilli.png")}
      />
    ),
  },
  {
    id: 7,
    name: "Lily-plant",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/lily-plant.png")}
      />
    ),
  },
  {
    id: 8,
    name: "Orange",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/orange.png")}
      />
    ),
  },
  {
    id: 9,
    name: "Potato",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/potato.png")}
      />
    ),
  },
  {
    id: 10,
    name: "Pumpkin",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/pumpkin.png")}
      />
    ),
  },
  {
    id: 11,
    name: "Spinach",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/apple.png")}
      />
    ),
  },
  {
    id: 12,
    name: "Tomatos",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/tomatoes.png")}
      />
    ),
  },
];
const Home = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState([...Data]);
  const [mastersearchTerm, setmasterSearchTerm] = useState([...Data]);

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

  const clicked = (item) => {
    console.log(item, "check");

    Alert.alert(
      "Add to Cart",
      `Do you want to add ${item.name} to your cart ?`,
      [
        { text: "Yes", onPress: () => navigation.navigate("Cart") },
        { text: "No" },
      ],
    );
  };
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView refreshControl={<RefreshControl />}>
        <View style={AppStyle.container}>
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
              }}>
              <Text style={AppStyle.title}>
                Enjoy the special offer up to 30%
              </Text>
              <Text
                style={{ color: "#7B7B7B", fontSize: 16, left: 20, top: -10 }}>
                At sep 12 - sep 20{" "}
              </Text>
              <Image
                style={{ alignSelf: "flex-end", bottom: 70, right: 30 }}
                source={require("./Data-imgs/fruits.png")}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 22, fontWeight: "600", paddingVertical: 15 }}>
            Recent Viewed
          </Text>
          <View style={AppStyle.middelCard}>
            <TouchableOpacity>
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
                }}>
                {" "}
                Apple
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 100, width: 100, borderRadius: 50 }}
                source={require("./Data-imgs/orange.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  textAlign: "center",
                  paddingTop: 10,
                }}>
                Orange
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 100, width: 100, borderRadius: 50 }}
                source={require("./Data-imgs/tomatoes.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  textAlign: "center",
                  paddingTop: 10,
                }}>
                Tomatoes
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ fontSize: 22, fontWeight: "600", paddingVertical: 15 }}>
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
                <TouchableOpacity
                  style={AppStyle.card}
                  onPress={() => clicked(item)}>
                  {item.img}
                  <Text style={AppStyle.cardText}>{item.name}</Text>
                  <Text style={AppStyle.homePrice}>$30</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({});
