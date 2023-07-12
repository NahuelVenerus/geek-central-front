import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import {
  faEye,
  faEyeSlash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/fields.css";

export function RenderField({
  label,
  name,
  type = "text",
  passwordField = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-field">
      <label htmlFor={name} className="col-form-label label-styles">
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
}
