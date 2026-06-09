import React from "react";
import "./Button.scss";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;