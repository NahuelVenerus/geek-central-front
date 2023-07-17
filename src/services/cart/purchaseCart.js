import axios from "axios";
import { BASE_ROUTE } from "../../config.js";

export const purchaseCart = async (nickname) => {
  try {
    await axios.put(`${BASE_ROUTE}/cart/${nickname}`);
  } catch (error) {
    console.log("purchaseCart service error", error);
  }
};
