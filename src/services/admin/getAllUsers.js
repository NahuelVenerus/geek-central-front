import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const getAllUsers = async () => {
  try {
    const users = await axios.get(`${BASE_ROUTE}/admin/get-users`);
    return users.data;
  } catch (error) {
    console.log("getAllUsers service error", error);
  }
};
