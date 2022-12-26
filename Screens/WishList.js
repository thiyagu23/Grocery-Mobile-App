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
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";
import { Data } from "./Data";
import { useSelector, useDispatch } from "react-redux";
import LottieView from "lottie-react-native";
import { removeFromWish } from "../Redux/wishListSlice";
removeFromWish;

const WishList = () => {
  const [clickLike, setClickLike] = useState(true);

  const wishList = useSelector((state) => state.wishListReducer);
  const dispatch = useDispatch();
  const handlerRemove = (item) => {
    dispatch(removeFromWish(item));
    // console.log(item);
  };

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      {wishList.wishListItems.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <LottieView
            source={require("./Data-imgs/wish.json")}
            autoPlay
            loop
            autoSize
            style={{ width: "70%", aspectRatio: 1, bottom: 30 }}
          />
          <Text style={styles.emptyCart}>Your WishList Is Empty!</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={AppStyle.container}>
            <View>
              <FlatList
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data={wishList.wishListItems}
                renderItem={({ item, index }) => (
                  <View
                    style={[AppStyle.cartCard, { marginTop: 20, height: 170 }]}>
                    <View style={{ top: 20 }}>{item.img}</View>
                    <Text style={AppStyle.discount}>{item.discount}</Text>
                    <Text
                      style={[
                        AppStyle.cartText,
                        { fontSize: 20, left: 130, marginTop: 80 },
                      ]}>
                      {item.name}
                    </Text>
                    <Text
                      style={[AppStyle.ItemType, { left: 130, bottom: 105 }]}>
                      {item.type}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handlerRemove(item)}
                      style={{
                        alignSelf: "flex-end",
                        bottom: 120,
                        height: 50,
                      }}>
                      <Icon
                        color="red"
                        name={
                          item.likeImg === "true" ? "heart" : "heart-outline"
                        }
                        size={28}
                      />
                    </TouchableOpacity>
                    <Text style={AppStyle.rating}>
                      <Image
                        style={{ padding: 30 }}
                        source={require("./Data-imgs/rating.png")}
                      />
                      <Text>{item.ratingImg}</Text>
                      <Text style={{ marginLeft: 20, textAlign: "center" }}>
                        {item.leftRating}
                      </Text>
                    </Text>
                    <Text style={AppStyle.rightRating}>
                      {" "}
                      {item.rightRating}
                    </Text>
                    <Text
                      style={[
                        AppStyle.itemPrice,
                        { fontSize: 18, bottom: 20, left: 15 },
                      ]}>
                      <Text>{`$${item.currentPrice}          `}</Text>
                      <Text
                        style={{
                          textDecorationLine: "line-through",
                          color: "#5C5C5C",
                        }}>
                        ${item.oldPrice}
                      </Text>
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default WishList;

const styles = StyleSheet.create({
  emptyCart: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#3A7F0D",
    bottom: 90,
  },
});
