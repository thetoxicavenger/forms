import React from "react";

function TextInput({ name, value, onChange, onBlur }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default TextInput;
