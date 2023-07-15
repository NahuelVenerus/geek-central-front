import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../state/user";
import { RenderField } from "../commons/Fields";
import FormsButtons from "../commons/FormsButtons";
import { login } from "../services/users/login";
import Swal from "sweetalert2";
import "./styles/login.css";

import * as Yup from "yup";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    nickname: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    nickname: Yup.string().required("Campo obligatorio"),
    password: Yup.string()
      .required("Campo obligatorio")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "La contraseña no puede contener espacios ni caracteres especiales"
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número"
      ),
  });

  const handleLogIn = async (values) => {
    try {
      const nickname = values.nickname;
      const password = values.password;

      const loggedUser = await login(nickname, password);
      dispatch(setUser(loggedUser));
      navigate("/");
    } catch (error) {
      Swal.fire(
        "Login Error",
        "An error occurred while attempting to log in.",
        "error"
      );
      console.log(" handlelogin error", error);
    }
  };

  return (
    <div className="login-body ">
      <div className="login-form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogIn}
        >
          <Form>
            <div>{<RenderField label="Nickname" name="nickname" />}</div>

            <div>
              {
                <RenderField
                  label="Password"
                  name="password"
                  type="password"
                  passwordField={true}
                />
              }
            </div>

            <br />
            <FormsButtons />
            <br />

            <Link to={"/signup"}>
              <h6 className="link-to-signup">I don`t have an account!</h6>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;
