import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const editCartProductQuantity = async (productId, quantity) => {
  try {
    await axios.put(`${BASE_ROUTE}/cart-products/edit`, {
      id: productId,
      quantity: quantity,
    });
  } catch (error) {
    console.log("editCartProductQuantity service error", error);
  }
};
