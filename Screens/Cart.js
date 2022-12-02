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
const Data = [
  {
    id: 1,
    name: "Apple",
    img: (
      <Image
        style={{
          height: 110,
          width: 110,
          borderRadius: 10,
          top: 15,
          right: 10,
        }}
        source={require("./Data-imgs/apples.jpg")}
      />
    ),
    type: "Fruit",
    less: "-",
    counter: "3",
    add: "+",
    currentPrice: "$30   ",
    oldPrice: "$40",
    Qty: 1,
  },
  {
    id: 2,
    name: "Pumpkin",
    img: (
      <Image
        style={{
          height: 110,
          width: 110,
          borderRadius: 10,
          top: 15,
          right: 10,
        }}
        source={require("./Data-imgs/pumpkin.png")}
      />
    ),
    type: "Vegetable",
    less: "-",
    counter: "2",
    add: "+",
    currentPrice: "$15   ",
    oldPrice: "$30",
    Qty: 1,
  },
  {
    id: 3,
    name: "Brinjal",
    img: (
      <Image
        style={{
          height: 110,
          width: 110,
          borderRadius: 10,
          top: 15,
          right: 10,
        }}
        source={require("./Data-imgs/brinjal.png")}
      />
    ),
    type: "Vegetable",
    less: "-",
    counter: "3",
    add: "+",
    currentPrice: "$25   ",
    oldPrice: "$35",
    Qty: 1,
  },
];
const Cart = () => {
  const [count, setCount] = useState(Data);

  const handleIncrement = (item, index) => {
    // let dummy = {
    //   type: item.type,
    //   less: "-",
    //   counter: item.counter,
    //   add: "+",
    //   currentPrice: item.currentPrice,
    //   oldPrice: item.oldPrice,
    //   Qty: parseInt(item.Qty) + 1,
    // };

    count[index].Qty = count[index].Qty + 1;
    console.log(count, "test");
    setCount([...count]);
    // setCount((count) =>
    //   count.map((item) => {
    //     return { ...item, Qty: item.Qty + 1 };
    //   }),
    // );
  };
  console.log(count, "checked");

  // const handleDecrement = () => {

  //   if (count > 0) {
  //     setCount((prevCount) => prevCount - 1);
  //   }
  // };

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
              data={count}
              renderItem={({ item, index }) => (
                <View style={[AppStyle.cartCard, { marginTop: 20 }]}>
                  {item.img}
                  <Text
                    style={[
                      AppStyle.cartText,
                      { marginTop: 80, paddingLeft: 10 },
                    ]}>
                    {item.name}
                  </Text>
                  <Text style={AppStyle.ItemType}>{item.type}</Text>
                  <View style={AppStyle.itemCounter}>
                    <TouchableOpacity>
                      <Text style={AppStyle.less}>{item.less} </Text>
                    </TouchableOpacity>
                    <Text style={AppStyle.counter}>{item.Qty}</Text>
                    <TouchableOpacity
                      onPress={() => handleIncrement(item, index)}>
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
                        color: "#5C5C5C",
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
