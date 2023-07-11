import axios from "axios";
import { BASE_ROUTE } from "../../config.js";

export const purchaseCart = async () => {
  try {
    await axios.put(`${BASE_ROUTE}/cart/`);
  } catch (error) {
    console.log("purchaseCart service error", error);
  }
};
