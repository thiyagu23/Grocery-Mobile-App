import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";
import authReducer from "./authSlice";

import cartReducer from "./cartSlice";
import themeReducer from "./reducer";

const rootReducer = combineReducers({ cartReducer, themeReducer, authReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
