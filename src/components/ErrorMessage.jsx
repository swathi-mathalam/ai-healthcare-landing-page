import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error">
      <h3>⚠️ Error</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;