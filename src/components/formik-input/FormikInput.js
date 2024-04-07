import React from "react";

import "./FormikInput.scss";

const FormikInput = ({
  label,
  name,
  formik,
  placeholder = `Your ${label.toLowerCase()}...`,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        className="input"
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        placeholder={placeholder}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="error-message">*{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default FormikInput;
