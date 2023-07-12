import axios from "axios";
import { BASE_ROUTE } from "../../config.js";

export const editCartProduct = async (cartProductId, quantity) => {
  try {
    await axios.put(`${BASE_ROUTE}/cart-products/edit`, {
      id: cartProductId,
      quantity: quantity,
    });
  } catch (error) {
    console.log("editCartProduct service error", error);
  }
};
