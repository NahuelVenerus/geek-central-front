import axios from "axios";
import { BASE_ROUTE } from "../../config.js";

export const getUserCart = async () => {
  try {
    const createdCart = await axios.get(`${BASE_ROUTE}/users/cart/${nickname}`);
    return sortCart(createdCart);
  } catch (error) {
    console.log("addToCart service error", error);
  }
};

const sortCart = (cart) => {
  return cart.data.cart_product?.sort(function (a, b) {
    return a.productId - b.productId;
  });
};
