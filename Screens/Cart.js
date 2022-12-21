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
import { Data } from "./Data";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import {
  removeFromCart,
  decreaseItems,
  increaseItems,
} from "../Redux/cartSlice";
import LottieView from "lottie-react-native";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  // console.log(cart.cartItems, "added products");
  const [count, setCount] = useState(Data);
  const [total, setTotal] = useState(0);

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
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text style={AppStyle.ItemType}>{item.type}</Text>
                    <View style={AppStyle.itemCounter}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(item, index)}
                      >
                        <Text style={AppStyle.less}>{item.less} </Text>
                      </TouchableOpacity>
                      <Text style={AppStyle.counter}>{item.cartQuantity}</Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(item, index)}
                      >
                        <Text style={AppStyle.add}>{item.add}</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      onPress={() => handlerRemove(item)}
                      style={AppStyle.remove}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 15,
                        }}
                      >
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
                        }}
                      >
                        ${item.oldPrice}
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
                  padding: 10,
                  color: "#3A7F0D",
                }}
              >
                Bill Details
              </Text>
              <View style={AppStyle.billCard}>
                <View>
                  <Text style={AppStyle.cartName}>Item Total</Text>
                  <Text style={AppStyle.cartName}>Delivery Fee</Text>
                  <Text style={AppStyle.cartName}>Taxes and Charges</Text>
                </View>
                <View>
                  <Text style={[AppStyle.cartPrice, { left: 33 }]}>
                    ${total}.00
                  </Text>
                  <Text style={AppStyle.cartPrice}>+ $25.00</Text>
                  <Text style={AppStyle.cartPrice}>+ $30.00</Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    padding: 10,
                    left: 10,
                    // top: 15,
                  }}
                >
                  Order Total
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    padding: 10,
                    left: 280,
                    bottom: 50,
                  }}
                >
                  ${total + extras}.00
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Payment", {
                  price: `$${total + extras}.00`,
                })
              }
            >
              <Text style={styles.logoutBtn}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    bottom: 100,
  },
  logoutBtn: {
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
});
