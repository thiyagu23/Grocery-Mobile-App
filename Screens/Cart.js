import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";

const Cart = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      <ScrollView>
        <View style={AppStyle.container}>
          <View>
            <FlatList
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={Data}
              renderItem={({ item }) => (
                <View style={[AppStyle.cartCard, { marginTop: 20 }]}>
                  <Text style={AppStyle.cardImg}>{item.img} </Text>
                  <Text style={AppStyle.cartText}>{item.name}</Text>
                  <Text style={AppStyle.ItemType}>{item.type}</Text>
                  <View style={AppStyle.itemCounter}>
                    <TouchableOpacity onPress={handleDecrement}>
                      <Text style={AppStyle.less}>{item.less} </Text>
                    </TouchableOpacity>
                    <Text style={AppStyle.counter}>{count}</Text>
                    <TouchableOpacity onPress={handleIncrement}>
                      <Text style={AppStyle.add}>{item.add}</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={AppStyle.remove}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        right: 11,
                        top: 8,
                      }}>
                      Remove
                    </Text>
                    <Image
                      style={{ bottom: 8, left: 32 }}
                      source={require("./Data-imgs/remove.png")}
                    />
                  </TouchableOpacity>
                  <Text style={AppStyle.itemPrice}>
                    <Text style={{ margin: 20 }}>{item.currentPrice}</Text>

                    <Text
                      style={{
                        textDecorationLine: "line-through",
                      }}>
                      {item.oldPrice}
                    </Text>
                  </Text>
                </View>
              )}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 15,
                color: "#3A7F0D",
              }}>
              Bill Details
            </Text>
            <FlatList
              data={Bills}
              renderItem={({ item }) => (
                <View style={AppStyle.billCard}>
                  <Text style={AppStyle.cartName}>{item.name}</Text>
                  <Text style={AppStyle.cartPrice}>{item.Price}</Text>
                </View>
              )}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                  left: 10,
                  top: 25,
                }}>
                Order Total
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                  left: 275,
                  bottom: 25,
                }}>
                $90.02
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({});

const Data = [
  {
    id: 1,
    name: "Apple",
    img: <Image source={require("./Data-imgs/apple.png")} />,
    type: "Fruit",
    less: "-",
    counter: "3",
    add: "+",
    currentPrice: "$30  ",
    oldPrice: "$40",
  },
  {
    id: 2,
    name: "Beetroot",
    img: <Image source={require("./Data-imgs/Beetroot.png")} />,
    type: "Vegtable",
    less: "-",
    counter: "2",
    add: "+",
    currentPrice: "$15  ",
    oldPrice: "$30",
  },
  {
    id: 3,
    name: "Brinjal",
    img: <Image source={require("./Data-imgs/brinjal.png")} />,
    type: "Vegtable",
    less: "-",
    counter: "3",
    add: "+",
    currentPrice: "$25  ",
    oldPrice: "$35",
  },
];
const Bills = [
  {
    id: 1,
    name: "Item Total",
    Price: "$65.00",
  },
  {
    id: 2,
    name: "Delivery Fee for 8 kms",
    Price: "+ $10.00",
  },
  {
    id: 3,
    name: "Texes and Charge",
    Price: "+ $15.02",
  },
];
