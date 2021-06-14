import React from "react";
import "./TextInput.css";

function TextInput({
  id,
  name,
  value,
  onChange,
  onBlur,
  error = false,
  inputRef,
}) {
  return (
    <input
      id={id}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={error ? "border-red" : ""}
      ref={inputRef}
    />
  );
}

export default TextInput;
