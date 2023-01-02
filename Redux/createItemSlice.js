import { createSlice } from "@reduxjs/toolkit";
// import { ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";

const initialState = {
    tableItems: [],
    
  };

const createItemSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        addToTable(state, action) {
        
          const tempItem = { ...action.payload };
          state.tableItems.push(tempItem);
  
          Toast.show({
            type: "success",
            position: "bottom",
            bottomOffset: 60,
            visibilityTime: 2000,
            text1: `${action.payload.name} Item created !!`,
          });
        
        //   state.cartItems.push(action.payload);
        //   console.log(state.cartItems);
        // console.log(state.cartItems);
      },
      
    },
  });
  
  export const {
    addToTable,
   
  } = createItemSlice.actions;
  
  export default createItemSlice.reducer;