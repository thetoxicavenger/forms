import React from "react";
import "./ValidationError.css";

function ValidationError({ children }) {
  return <p className="red mx-10">{children}</p>;
}

export default ValidationError;
