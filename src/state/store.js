import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "./shoppingCart";
import { productListReducer } from "./productList";
import { finalPriceReducer } from "./finalPrice";
import { userListReducer } from "./usersList";
import productsReducer from "./products";
import userReducer from "./user";

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  user: userReducer,
  shoppingCart: shoppingCartReducer,
  productList: productListReducer,
  finalPrice: finalPriceReducer,
  userList: userListReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
