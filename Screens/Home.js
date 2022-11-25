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
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";

const Home = () => {
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView>
        <View style={AppStyle.container}>
          <TextInput style={AppStyle.search} placeholder="Search" />

          <Image
            style={{ alignSelf: "flex-end", bottom: 55, right: 45 }}
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
            style={{ fontSize: 22, fontWeight: "bold", paddingVertical: 15 }}>
            Recent Viewed
          </Text>
          <TouchableOpacity style={AppStyle.middelCard}>
            <View>
              <Image source={require("./Data-imgs/apple.png")} />
              <Text> Apple</Text>
            </View>
            <View>
              <Image source={require("./Data-imgs/Beetroot.png")} />
              <Text>Beetroot</Text>
            </View>
            <View>
              <Image source={require("./Data-imgs/brinjal.png")} />
              <Text>Brinjal</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", paddingVertical: 15 }}>
            All Groceries
          </Text>
          <View>
            <FlatList
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={Data}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity style={AppStyle.card}>
                  <Text style={AppStyle.cardImg}>{item.img}</Text>
                  <Text style={AppStyle.cardText}>{item.name}</Text>
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

const Data = [
  {
    id: 1,
    name: "Apple",
    img: <Image source={require("./Data-imgs/apple.png")} />,
  },
  {
    id: 2,
    name: "Beetroot",
    img: <Image source={require("./Data-imgs/Beetroot.png")} />,
  },
  {
    id: 3,
    name: "Brinjal",
    img: <Image source={require("./Data-imgs/brinjal.png")} />,
  },
  {
    id: 4,
    name: "Carrot",
    img: <Image source={require("./Data-imgs/carrot.png")} />,
  },
  {
    id: 6,
    name: "Grapes",
    img: <Image source={require("./Data-imgs/grapes.png")} />,
  },
  {
    id: 7,
    name: "Green-chilli",
    img: <Image source={require("./Data-imgs/green-chilli.png")} />,
  },
  {
    id: 8,
    name: "Lily-plant",
    img: <Image source={require("./Data-imgs/lily-plant.png")} />,
  },
  {
    id: 9,
    name: "Orange",
    img: <Image source={require("./Data-imgs/orange.png")} />,
  },
  {
    id: 10,
    name: "Potato",
    img: <Image source={require("./Data-imgs/potato.png")} />,
  },
  {
    id: 11,
    name: "Pumpkin",
    img: <Image source={require("./Data-imgs/pumpkin.png")} />,
  },
  {
    id: 12,
    name: "Spinach",
    img: <Image source={require("./Data-imgs/spinach.png")} />,
  },
  {
    id: 13,
    name: "Tomatos",
    img: <Image source={require("./Data-imgs/tomatoes.png")} />,
  },
];
