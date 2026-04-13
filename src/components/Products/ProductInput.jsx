import React from "react";

const ProductInput = ({ label, type, placeholder, name, handleChange }) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
    </label>
  );
};

export default ProductInput;
