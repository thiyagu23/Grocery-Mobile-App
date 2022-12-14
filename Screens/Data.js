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
    intialPrice: 30,
    currentPrice: 30,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 20,
    currentPrice: 20,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 18,
    currentPrice: 18,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 33,
    currentPrice: 33,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 30,
    currentPrice: 30,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 35,
    currentPrice: 35,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 36,
    currentPrice: 36,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 20,
    currentPrice: 20,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 40,
    currentPrice: 40,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 35,
    currentPrice: 35,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 10,
    currentPrice: 10,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
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
    intialPrice: 25,
    currentPrice: 25,
    oldPrice: 40,
    cartQuantity: 0,
    leftRating: " 4.3",
    rightRating: "90 Reviews",
    discount: "5% OFF",
    likeImg: "false",
  },
];
