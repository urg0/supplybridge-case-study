import React from "react";

import "@components/ui/button/Button.scss";
import { ReactSVG } from "react-svg";

const Button = ({
  label,
  icon = null,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`button-container ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <ReactSVG src={icon} className="button-icon" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
