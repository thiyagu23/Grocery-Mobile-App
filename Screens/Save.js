import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";

const Save = () => {
  const [clickLike, setClickLike] = useState(true);
  const [Data, setData] = useState([
    {
      id: 1,
      name: "Pumpkin",
      img: <Image source={require("./Data-imgs/pumpkin-like.png")} />,
      ratingImg: <Image source={require("./Data-imgs/rating.png")} />,
      leftRating: " 4.3",
      rightRating: "90 Ratings",
      currentPrice: "$30       ",
      oldPrice: "$40",
      discount: "5% OFF",
      likeImg: "true",
    },
    {
      id: 2,
      name: "Spinach",
      img: <Image source={require("./Data-imgs/spinach-like.png")} />,
      ratingImg: <Image source={require("./Data-imgs/rating.png")} />,
      leftRating: " 4.3",
      rightRating: "45 Ratings",
      currentPrice: "$15       ",
      oldPrice: "$30",
      discount: "10% OFF",
      likeImg: "true",
    },
    {
      id: 3,
      name: "Broccoli",
      img: <Image source={require("./Data-imgs/broccoli-like.png")} />,
      ratingImg: <Image source={require("./Data-imgs/rating.png")} />,
      leftRating: " 4.3",
      rightRating: "70 Ratings",
      currentPrice: "$30       ",
      oldPrice: "$40",
      discount: "18% OFF",
      likeImg: "false",
    },
    {
      id: 4,
      name: "Tomatoes",
      img: <Image source={require("./Data-imgs/tomato-like.png")} />,
      ratingImg: <Image source={require("./Data-imgs/rating.png")} />,
      leftRating: " 4.3",
      rightRating: "80 Ratings",
      currentPrice: "$30       ",
      oldPrice: "$40",
      discount: "15% OFF",
      likeImg: "false",
    },
  ]);

  const changeIcon = (item, index) => {
    Data[index].likeImg = Data[index].likeImg === "true" ? "false" : "true";
    setData([...Data]);
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
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[AppStyle.cartCard, { marginTop: 20, height: 180 }]}>
                  <Text
                    style={[
                      AppStyle.cardImg,
                      {
                        bottom: 50,
                        width: 300,
                        height: 200,
                        right: 10,
                        marginRight: 50,
                      },
                    ]}>
                    {item.img}{" "}
                  </Text>
                  <Text style={AppStyle.discount}>{item.discount}</Text>
                  <Text
                    style={[AppStyle.cartText, { fontSize: 21, left: 130 }]}>
                    {item.name}
                  </Text>
                  <Text
                    onPress={() => changeIcon(item, index)}
                    style={{
                      alignSelf: "flex-end",
                      bottom: 140,
                      height: 50,
                    }}>
                    <Icon
                      allowFontScaling={false}
                      color="red"
                      name={item.likeImg === "true" ? "heart" : "heart-outline"}
                      size={28}
                    />
                  </Text>
                  <Text style={AppStyle.rating}>
                    <Text style={{ padding: 30 }}>{item.ratingImg}</Text>
                    <Text style={{ marginLeft: 20, textAlign: "center" }}>
                      {item.leftRating}
                    </Text>
                  </Text>
                  <Text style={AppStyle.rightRating}> {item.rightRating}</Text>
                  <Text
                    style={[AppStyle.itemPrice, { fontSize: 20, left: 30 }]}>
                    <Text>{item.currentPrice}</Text>
                    <Text
                      style={{
                        textDecorationLine: "line-through",
                        color: "#5C5C5C",
                      }}>
                      {item.oldPrice}
                    </Text>
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Save;

const styles = StyleSheet.create({});
