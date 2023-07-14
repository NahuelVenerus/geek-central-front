import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const getAllOrders = async () => {
  try {
    const orders = await axios.get(`${BASE_ROUTE}/admin/orders`);
    return orders.data;
  } catch (error) {
    console.log("getAllProducts service error", error);
  }
};
