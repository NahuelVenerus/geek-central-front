import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/signUp.css";
import { validationSchema, initialValues } from "../utils/signUp";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const renderField = (label, name, type = "text", passwordField = false) => (
    <div className="form-group">
      <label htmlFor={name} className="col-form-label">
        {label}
      </label>
      <div className={passwordField ? "input-group" : ""}>
        <Field
          type={passwordField ? (showPassword ? "text" : "password") : type}
          id={name}
          name={name}
          className="form-control"
        />
        {passwordField && (
          <div className="input-group-append">
            <span
              className="input-group-text show-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                cursor: "pointer",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        )}
      </div>
      <br />

      <ErrorMessage
        name={name}
        component={({ children }) => (
          <div className="text-danger alert alert-danger">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="mr-2 error-icon"
            />
            {children}
          </div>
        )}
      />
    </div>
  );

  const handleSubmit = (values) => {
    if (values.password === values.validatePassword) {
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
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="row">
            <div className="col-md-6">{renderField("Name", "name")}</div>
            <div className="col-md-6">
              {renderField("Last Name", "lastName")}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {renderField("Nickname", "nickname")}
            </div>
            <div className="col-md-6">
              {renderField("E-mail", "email", "email")}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {renderField("Password", "password", "password", true)}
            </div>
            <div className="col-md-6">
              {renderField(
                "Validate Password",
                "validatePassword",
                "password",
                true
              )}
            </div>
          </div>

          {renderField("Address", "address")}

          <div className="row">
            <div className="col-md-6">
              {renderField("Zip Code", "zip_code")}
            </div>
            <div className="col-md-6">{renderField("City", "city")}</div>
          </div>

          <br />

          <div className="form-group row">
            <button type="submit" className="btn btn-primary custom-submit-btn">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
