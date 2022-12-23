import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";

import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppStyle from "./AppStyle";
import { Data } from "./Data";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
  removeFromCart,
  decreaseItems,
  increaseItems,
  getTotal,
} from "../Redux/cartSlice";
import LottieView from "lottie-react-native";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer);
  // console.log(cart.cartTotalAmount);

  const dispatch = useDispatch();
  // console.log(cart.cartItems, "added products");
  const [count, setCount] = useState(Data);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handlerRemove = (item) => {
    dispatch(removeFromCart(item));
    // console.log(item);
  };

  const handleIncrement = (item, index) => {
    dispatch(increaseItems(item));

    // let dummy = {
    //   type: item.type,
    //   less: "-",
    //   counter: item.counter,
    //   add: "+",
    //   currentPrice: item.currentPrice,
    //   oldPrice: item.oldPrice,
    //   Qty: parseInt(item.Qty) + 1,
    // };
    // if (count[index].Qty < 10) {
    //   count[index].Qty = count[index].Qty + 1;
    //   count[index].price = count[index].price + Data[index].price;
    // console.log(Data[index].currentPrice, "test");
    // console.log(count[index].currentPrice, "check");
    // setCount([...count]);
    // }
    // let add = 0;
    // count.forEach((element) => {
    //   add = element.price + add;
    // });
    // console.log(add, "addingg");
    // console.log(temp, "checkkk");
    // setTotal(add);
    // setCount((count) =>
    //   count.map((item) => {
    //     return { ...item, Qty: item.Qty + 1 };
    //   }),
    // );
  };
  // console.log(count, "checked");
  const handleDecrement = (item, index) => {
    dispatch(decreaseItems(item));
    // if (count[index].Qty > 1) {
    //   count[index].Qty = count[index].Qty - 1;
    //   count[index].currentPrice =
    //     count[index].currentPrice - Data[index].currentPrice;
    //   setCount([...count]);
    // }
    // let add = 0;
    // count.forEach((element) => {
    // console.log(element.currentPrice, add, "check123");
    // add = element.currentPrice + add;
    // });
    // console.log(add, "addingg");
    // console.log(temp, "checkkk");
    // setTotal(add);
  };
  let tax = 30;
  let fees = 25;
  let extras = tax + fees;
  // const remove = (id) => {
  //   let dlt = [...count];
  //   dlt.splice(id, 1);
  //   setCount(dlt);
  // };

  return (
    <LinearGradient colors={["#99de81", "#F5F5F5"]} style={{ height: "100%" }}>
      {cart.cartItems.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <LottieView
            source={require("./Data-imgs/lf30_editor_tetqnu4h.json")}
            autoPlay
            loop
            autoSize
            style={{ width: "100%", aspectRatio: 1, bottom: 30 }}
          />
          <Text style={styles.emptyCart}>Your Cart Is Empty!</Text>
        </View>
      ) : (
        <>
          <ScrollView>
            <View style={AppStyle.container}>
              <View>
                <FlatList
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  data={cart.cartItems}
                  renderItem={({ item, index }) => (
                    <View style={[AppStyle.cartCard, { marginTop: 15 }]}>
                      <View style={{ top: 15, right: 5 }}>{item.img}</View>
                      <Text
                        style={[
                          AppStyle.cartText,
                          { marginTop: 80, paddingLeft: 10 },
                        ]}>
                        {item.name}
                      </Text>
                      <Text style={AppStyle.ItemType}>{item.type}</Text>
                      <View style={AppStyle.itemCounter}>
                        <TouchableOpacity
                          onPress={() => handleDecrement(item, index)}>
                          <Text style={AppStyle.less}>{item.less} </Text>
                        </TouchableOpacity>
                        <Text style={AppStyle.counter}>
                          {item.cartQuantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => handleIncrement(item, index)}>
                          <Text style={AppStyle.add}>{item.add}</Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        onPress={() => handlerRemove(item)}
                        style={AppStyle.remove}>
                        <Text
                          style={{
                            fontWeight: "600",
                            fontSize: 15,
                          }}>
                          {"Remove "}
                          <Icon name="trash" size={18} />
                        </Text>
                      </TouchableOpacity>

                      <Text style={AppStyle.itemPrice}>
                        <Text style={{ margin: 20 }}>
                          ${`${item.currentPrice}     `}
                        </Text>

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
          <View style={styles.footer}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                ${cart.cartTotalAmount}.00
              </Text>
              <Text
                style={{
                  color: "#3A7F0D",
                  padding: 5,
                  fontWeight: "500",
                  fontSize: 15,
                }}>
                Total Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() =>
                navigation.navigate("Payment", {
                  price: cart.cartTotalAmount,
                })
              }>
              <Text
                style={{ fontSize: 17, color: "#ffffff", fontWeight: "600" }}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  emptyCart: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#3A7F0D",
    bottom: 130,
  },
  placeOrder: {
    width: "100%",
    borderRadius: 8,
    height: 50,
    textAlign: "center",
    backgroundColor: "#3A7F0D",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingTop: 10,
    marginTop: -35,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 80,
    borderColor: "#99de81",
    borderTopWidth: 5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
  },
  btn1: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  btn2: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A7F0D",
    height: "80%",
    right: 10,
    borderRadius: 10,
    marginRight: 20,
  },
});
