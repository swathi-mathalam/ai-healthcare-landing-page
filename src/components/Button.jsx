import React from "react";
import "./Button.scss";

const Button = ({
  text,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="custom-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;