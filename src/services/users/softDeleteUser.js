import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const softDeleteUser = async (id) => {
  try {
    await axios.put(
      `${BASE_ROUTE}/users/delete-user/${id}`,
      { withCredentials: true },
      { is_deleted: true }
    );
  } catch (error) {
    console.log("softDeleteUser service error", error);
  }
};
