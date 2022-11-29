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
        style={{ height: 100, width: 100, borderRadius: 10 }}
        source={require("./Data-imgs/apples.jpg")}
      />
    ),
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
    id: 5,
    name: "Grapes",
    img: <Image source={require("./Data-imgs/grapes.png")} />,
  },
  {
    id: 6,
    name: "Green-chilli",
    img: <Image source={require("./Data-imgs/green-chilli.png")} />,
  },
  {
    id: 7,
    name: "Lily-plant",
    img: <Image source={require("./Data-imgs/lily-plant.png")} />,
  },
  {
    id: 8,
    name: "Orange",
    img: <Image source={require("./Data-imgs/orange.png")} />,
  },
  {
    id: 9,
    name: "Potato",
    img: <Image source={require("./Data-imgs/potato.png")} />,
  },
  {
    id: 10,
    name: "Pumpkin",
    img: <Image source={require("./Data-imgs/pumpkin.png")} />,
  },
  {
    id: 11,
    name: "Spinach",
    img: <Image source={require("./Data-imgs/spinach.png")} />,
  },
  {
    id: 12,
    name: "Tomatos",
    img: <Image source={require("./Data-imgs/tomatoes.png")} />,
  },
];
const Home = () => {
  const [searchTerm, setSearchTerm] = useState([...Data]);

  // const key = Data.filter((item) => {
  //   if (searchTerm === Data.name) {
  //     return item;
  //   } else if (item.name.toLowerCase().includes(searchTerm)) {
  //     return item;
  //   }
  // });
  const searchFunction = (e) => {
    let value = e;
  };
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView>
        <View style={AppStyle.container}>
          <TextInput
            style={AppStyle.search}
            placeholder="Search"
            onChangeText={(e) => searchFunction({ e })}
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
            style={{ fontSize: 22, fontWeight: "bold", paddingVertical: 15 }}>
            Recent Viewed
          </Text>
          <TouchableOpacity style={AppStyle.middelCard}>
            <View>
              <Image
                style={{ height: 100, width: 100, borderRadius: 10 }}
                source={require("./Data-imgs/apples.jpg")}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: 10,
                }}>
                {" "}
                Apple
              </Text>
            </View>
            <View>
              <Image
                style={{ height: 100, width: 100, borderRadius: 10 }}
                source={require("./Data-imgs/Beetroot.png")}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: 10,
                }}>
                Beetroot
              </Text>
            </View>
            <View>
              <Image
                style={{ height: 100, width: 100, borderRadius: 10 }}
                source={require("./Data-imgs/brinjal.png")}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: 10,
                }}>
                Brinjal
              </Text>
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
              data={searchTerm}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity style={AppStyle.card}>
                  <Text style={AppStyle.cardImg}>{item.img}</Text>
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
