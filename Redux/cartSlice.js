import { createSlice } from "@reduxjs/toolkit";
// import { ToastAndroid } from "react-native";

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
        (item) => item.id === action.payload.id
      );
      //   console.log(action.payload.id, "idd");
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartItems[itemIndex].price *=
          state.cartItems[itemIndex].cartQuantity;

        // alert("added to cart increased");
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
        // alert("added to cart ");
        // ToastAndroid.showWithGravity(
        //   "hiiii",
        //   ToastAndroid.SHORT,
        //   ToastAndroid.CENTER
        // );
      }
      //   state.cartItems.push(action.payload);
      //   console.log(state.cartItems);
    },
  },
  removeFromCart(state, action) {
    const removeItem = state.cartItems.filter(
      (cartItem) => cartItem.id !== action.payload.id
    );
    state.cartItems = removeItem;
    console.log(action.payload);
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
