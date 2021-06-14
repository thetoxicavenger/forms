import React from "react";
import "./Label.css";

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="fw-500">
      {children}
    </label>
  );
}

export default Label;
