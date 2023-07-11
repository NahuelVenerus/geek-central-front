import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const logout = async () => {
  try {
    await axios.post(`${BASE_ROUTE}/users/logout`, { withCredentials: true });
  } catch (error) {
    console.log("logout service error", error);
  }
};
