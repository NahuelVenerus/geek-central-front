import * as Yup from "yup";

export const initialValues = {
  name: "",
  lastname: "",
  nickname: "",
  password: "",
  validatePassword: "",
  address: "",
  zip_code: "",
  city: "",
  email: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Obligatory Field")
    .matches(/^[A-Za-z ]*$/, "Only alphabetic characters are allowed"),
  lastname: Yup.string()
    .required("Obligatory Field")
    .matches(/^[A-Za-z ]*$/, "Only alphabetic characters are allowed"),
  email: Yup.string()
    .required("Obligatory Field")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
  nickname: Yup.string().required("Obligatory Field"),
  password: Yup.string()
    .required("Obligatory Field")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password cannot contain spaces or special characters"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  validatePassword: Yup.string()
    .required("Obligatory Field")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password cannot contain spaces or special characters"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  address: Yup.string()
    .required("Obligatory Field")
    .matches(
      /^[a-zA-Z0-9\s.]+$/,
      "Invalid address. Only letters, numbers, spaces, and periods are allowed."
    ),

  zip_code: Yup.string()
    .required("Obligatory Field")
    .matches(
      /^[A-Z0-9]+$/,
      "Invalid ZIP code. Only uppercase letters and numbers are allowed."
    )
    .max(8, "ZIP code must be a maximum of 8 characters long"),
  city: Yup.string()
    .required("Obligatory Field")
    .matches(
      /^[A-Za-z0-9 .]*$/,
      "Only alphabetic characters, numbers, spaces, and periods are allowed"
    ),
});
