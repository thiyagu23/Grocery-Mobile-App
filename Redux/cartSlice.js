import { createSlice } from "@reduxjs/toolkit";
// import { ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      //   console.log(action.payload.id, "idd");
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // ToastAndroid.showWithGravity(
        //   `${action.payload.name} Incresed To Cart`,
        //   ToastAndroid.SHORT,
        //   ToastAndroid.CENTER,
        // );
        Toast.show({
          type: "info",
          position: "bottom",
          bottomOffset: 60,
          fontSize: 100,
          visibilityTime: 2000,
          text1: `${action.payload.name} Incresed To Cart !`,
        });
        state.cartItems[itemIndex].currentPrice += action.payload.intialPrice;

        // alert("added to cart increased");
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
        // alert("added to cart ");
        // ToastAndroid.showWithGravity(
        //   `${action.payload.name} Added To Cart`,
        //   ToastAndroid.SHORT,
        //   ToastAndroid.CENTER,
        // );
        Toast.show({
          type: "success",
          position: "bottom",
          bottomOffset: 60,
          visibilityTime: 2000,
          text1: `${action.payload.name} Added To Cart !!`,
        });
      }
      //   state.cartItems.push(action.payload);
      //   console.log(state.cartItems);
      // console.log(state.cartItems);
    },
    removeFromCart(state, action) {
      //
      const removeItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
      Toast.show({
        type: "error",
        position: "bottom",
        bottomOffset: 60,
        visibilityTime: 2000,
        text1: `${action.payload.name} Removed From Cart !!`,
      });
      state.cartItems = removeItem;
      // console.log(action.payload);
    },
    increaseItems(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      // console.log(itemIndex, " check");
      if (state.cartItems[itemIndex].cartQuantity > 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // console.log(action.payload);
        state.cartItems[itemIndex].currentPrice += action.payload.intialPrice;
      }
    },
    decreaseItems(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartItems[itemIndex].currentPrice -= action.payload.intialPrice;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removeItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
          Toast.show({
            type: "error",
            position: "bottom",
            bottomOffset: 60,
            visibilityTime: 2000,
            text1: `${action.payload.name} Removed From Cart !!`,
          }),
        );

        state.cartItems = removeItem;
      }
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { intialPrice, cartQuantity } = cartItem;
          const itemTotal = intialPrice * cartQuantity;

          cartTotal.total += itemTotal;
          // cartTotal.quantity += intialPrice;

          return cartTotal;
        },
        {
          total: 0,
          // quantity: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      // state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItems,
  decreaseItems,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
