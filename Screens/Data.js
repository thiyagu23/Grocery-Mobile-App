import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export const Data = [
  {
    id: 1,
    name: "Apple",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/apples.jpg")}
      />
    ),
    type: "Fruit",
    less: "-",
    add: "+",
    price: 30,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 20,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 18,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 33,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Fruit",
    less: "-",
    add: "+",
    price: 30,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 35,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 30,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Fruit",
    less: "-",
    add: "+",
    price: 20,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 40,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 35,
    oldPrice: 40,
    cartQuantity: 0,
  },
  {
    id: 11,
    name: "Broccoli",
    img: (
      <Image
        style={{ height: 110, width: 110, borderRadius: 10 }}
        source={require("./Data-imgs/broccoli-like.png")}
      />
    ),
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 10,
    oldPrice: 40,
    cartQuantity: 0,
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
    type: "Vegetable",
    less: "-",
    add: "+",
    price: 25,
    oldPrice: 40,
    cartQuantity: 0,
  },
];
