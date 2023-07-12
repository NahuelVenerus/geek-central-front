import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const getAllUsers = async () => {
  try {
    const users = await axios.get(`${BASE_ROUTE}/users`);
    return users;
  } catch (error) {
    console.log("getAllUsers service error", error);
  }
};
