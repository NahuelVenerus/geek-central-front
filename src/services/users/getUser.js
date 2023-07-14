import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const getUser = async () => {
  try {
    const user = await axios.get(`${BASE_ROUTE}/users/me`, {
      withCredentials: true,
    });
    return user.data;
  } catch (error) {
    console.log("getUser service error", error);
  }
};
