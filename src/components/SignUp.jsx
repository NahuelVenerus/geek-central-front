import React from "react";
import { Formik, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/signUp.css";
import { validationSchema, initialValues } from "../utils/validations";
import Swal from "sweetalert2";
import { RenderField } from "../commons/Fields";
import FormsButtons from "../commons/FormsButtons";
import { signup } from "../services/users/signup";

const SignUp = () => {
  const handleSubmit = async (values) => {
    try {
      if (values.password === values.validatePassword) {
        const {
          name,
          nickname,
          lastname,
          address,
          zip_code,
          city,
          email,
          password,
        } = values;

        await signup(
          name,
          nickname,
          lastname,
          address,
          zip_code,
          city,
          email,
          password
        );
        // Realizar el registro
        Swal.fire(
          "Successful Registration",
          "Registration has been completed successfully.",
          "success"
        );
      } else {
        // Mostrar un mensaje de error o realizar alguna acción alternativa
        Swal.fire(
          "Error",
          "Registration could not be completed. The passwords do not match.",
          "error"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-body">
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="row">
              <div className="col-md-6">
                {<RenderField label="Name" name="name" />}
              </div>
              <div className="col-md-6">
                {<RenderField label=" Last Name" name="lastname" />}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {<RenderField label="Nickname" name="nickname" />}
              </div>
              <div className="col-md-6">
                {<RenderField label="E-mail" name="email" type="email" />}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {
                  <RenderField
                    label="Password"
                    name="password"
                    type="password"
                    passwordField={true}
                  />
                }
              </div>
              <div className="col-md-6">
                <RenderField
                  label="Validate Password"
                  name="validatePassword"
                  type="password"
                  passwordField={true}
                />
              </div>
            </div>

            {<RenderField label="Address" name="address" />}

            <div className="row">
              <div className="col-md-6">
                {<RenderField label="Zip Code" name="zip_code" />}
              </div>
              <div className="col-md-6">
                {<RenderField label="City" name="city" />}
              </div>
            </div>

            <br />

            <FormsButtons />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
