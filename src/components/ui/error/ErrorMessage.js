import React from "react";

import { getIconPath } from "@utils/navigation.service";
import { ReactSVG } from "react-svg";

import Button from "@components/ui/button/Button";

import "@components/ui/error/ErrorMessage.scss";

const ErrorMessage = ({ refreshButton = false }) => {
  const refreshPageHandler = () => {
    window.location.reload();
  };

  return (
    <div className="error-container">
      <ReactSVG src={getIconPath("404")} className="404-icon" />
      <div className="error-message-container">
        <h2 className="error-message">Something went wrong</h2>
        <ReactSVG src={getIconPath("sad")} className="error-icon" />
      </div>
      {refreshButton && (
        <Button
          label="Refresh and try again"
          icon={getIconPath("refresh")}
          className="large blue fs-30"
          onClick={refreshPageHandler}
        />
      )}
    </div>
  );
};

export default ErrorMessage;
