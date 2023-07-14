import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const getAllProducts = async () => {
  try {
    console.log("BASE_ROUTE", BASE_ROUTE);
    const products = await axios.get(`${BASE_ROUTE}/products`);
    return products.data;
  } catch (error) {
    console.log("getAllProducts service error", error);
  }
};
