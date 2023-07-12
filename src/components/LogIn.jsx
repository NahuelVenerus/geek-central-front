import React from "react";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import { initialValues, validationSchema } from "../utils/validations";
import "./styles/login.css";
import { RenderField } from "../commons/Fields";
import FormsButtons from "../commons/FormsButtons";

function LogIn() {
  const handleSubmit = (values) => {
    Swal.fire(
      "Successful Log in",
      "You have been successfully logged in.",
      "success"
    );
  };

  return (
    <div className="login-body ">
      <div className="login-form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;
