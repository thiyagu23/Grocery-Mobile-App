import { createSlice } from "@reduxjs/toolkit";

import Toast from "react-native-toast-message";

const initialState = {
  wishListItems: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWish(state, action) {
      const itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        const removeItem = state.wishListItems.filter(
          (wishListItem) => wishListItem.id !== action.payload.id,
        );
        state.wishListItems = removeItem;
        //
        Toast.show({
          type: "error",
          position: "bottom",
          bottomOffset: 60,
          fontSize: 100,
          visibilityTime: 2000,
          text1: `${action.payload.name} Removed From WishList !`,
        });

        // alert("added to cart increased");
      } else {
        const tempItem = { ...action.payload, likeImg: "true" };
        state.wishListItems.push(tempItem);
        Toast.show({
          type: "info",
          position: "bottom",
          bottomOffset: 60,
          visibilityTime: 2000,
          text1: `${action.payload.name} Added To WishList !!`,
        });
      }
      //   state.wishListItems.push(action.payload);
      //   console.log(state.wishListItems);
      // console.log(state.wishListItems);
    },
    // removeFromWish(state, action) {
    //   //
    //   const removeItem = state.wishListItems.filter(
    //     (wishListItem) => wishListItem.id !== action.payload.id,
    //   );
    //   state.wishListItems = removeItem;
    //   Toast.show({
    //     type: "error",
    //     position: "bottom",
    //     bottomOffset: 60,
    //     visibilityTime: 2000,
    //     text1: `${action.payload.name} Removed From Cart !!`,
    //   });
    //   state.wishListItems = removeItem;
    //   // console.log(action.payload);
    // },
  },
});

export const { addToWish, removeFromWish } = wishListSlice.actions;

export default wishListSlice.reducer;
