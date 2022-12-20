import { combineReducers, applyMiddleware } from "redux";

import { legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";

import cartReducer from "./cartSlice";
import themeReducer from "./reducer";

const rootReducer = combineReducers({ cartReducer, themeReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
