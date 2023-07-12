import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const login = async (nickname, password) => {
  try {
    const loggedUser = await axios.post(
      `${BASE_ROUTE}/users/login`,
      {
        nickname: nickname.value,
        password: password.value,
      },
      { withCredentials: true }
    );
    return loggedUser;
  } catch (error) {
    console.log("login service error", error);
  }
};
