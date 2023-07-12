import axios from "axios";
import { BASE_ROUTE } from "../../config.js";

export const removeFromCart = async (cartProductId) => {
  try {
    await axios.delete(`${BASE_ROUTE}/cart-products/remove`, {
      data: { id: cartProductId },
    });
  } catch (error) {
    console.log("removeFromCart service error", error);
  }
};
