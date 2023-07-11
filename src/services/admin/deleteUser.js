import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const deleteUser = async (nickname) => {
  try {
    const deletedUser = await axios.delete(
      `${BASE_ROUTE}/admin/delete-user/${nickname}`
    );
    return deletedUser;
  } catch (error) {
    console.log("deleteUser service error", error);
  }
};
