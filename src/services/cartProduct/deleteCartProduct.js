import { BASE_ROUTE } from "../../config";
import axios from "axios";

export const deleteCartProduct = async (cartProductId) => {
  try {
    const deletedProduct = await axios.delete(
      `${BASE_ROUTE}/api/cart-products/remove`,
      {
        data: {
          id: cartProductId,
        },
      }
    );
    return deletedProduct;
  } catch (error) {
    console.log("deleteCartProduct service error", error);
  }
};
