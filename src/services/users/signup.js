import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const signup = async (
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
    console.log(
      "userData",
      name,
      nickname,
      lastname,
      address,
      zip_code,
      city,
      email,
      password
    );
    await axios.post(
      `${BASE_ROUTE}/users/signup`,
      {
        name: name,
        nickname: nickname,
        lastname: lastname,
        address: address,
        zip_code: zip_code,
        city: city,
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log("signup service error", error);
  }
};
