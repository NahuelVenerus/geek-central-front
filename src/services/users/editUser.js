import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const editUser = async (
  name,
  nickname,
  lastname,
  address,
  zip_code,
  city,
  email,
  password
) => {
  try {
    await axios.put(
      `${BASE_ROUTE}/users/${nickname}`,
      { withCredentials: true },
      {
        name: name.value,
        nickname: nickname.value,
        lastname: lastname.value,
        address: address.value,
        zip_code: zip_code.value,
        city: city.value,
        email: email.value,
        password: password.value,
      }
    );
  } catch (error) {
    console.log("editUser service error", error);
  }
};
