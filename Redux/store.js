import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import themeReducer from "./reducer";


import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishListSlice";
import createItemReducer from "./createItemSlice";

const rootReducer = combineReducers({
  cartReducer,
  themeReducer,
  authReducer,
  wishListReducer,
  createItemReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
