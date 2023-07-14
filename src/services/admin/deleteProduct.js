import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const deleteProduct = async (id) => {
  try {
    const deletedProduct = await axios.put(
      `${BASE_ROUTE}/admin/delete-product/${id}`,
      {
        is_deleted: true,
      }
    );
    return deletedProduct.data;
  } catch (error) {
    console.log("deleteProduct service error", error);
  }
};
