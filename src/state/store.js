import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { finalPriceReducer } from "./finalPrice";
import { userListReducer } from "./usersList";
import cartReducer from "./cart";
import productsReducer from "./products";
import userReducer from "./user";
import cartTotalReducer from "./cartTotal";
import cartProductReducer from "./cartProduct";

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  cartTotal: cartTotalReducer,
  cartProduct: cartProductReducer,
  finalPrice: finalPriceReducer,
  userList: userListReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
