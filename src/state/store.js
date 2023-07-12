import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import productsReducer from "./products";

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
