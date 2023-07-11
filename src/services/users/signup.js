import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const signup = async (
  name,
  nickname,
  lastName,
  address,
  zip_code,
  city,
  email,
  password
) => {
  try {
    await axios.post(`${BASE_ROUTE}/users/signup`),
      {
        name: name.value,
        nickname: nickname.value,
        lastName: lastName.value,
        address: address.value,
        zip_code: zip_code.value,
        city: city.value,
        email: email.value,
        password: password.value,
      },
      { withCredentials: true };
  } catch (error) {
    console.log("signup service error", error);
  }
};
