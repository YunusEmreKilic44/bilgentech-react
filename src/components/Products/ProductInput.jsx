import React from "react";

const ProductInput = ({
  label,
  type,
  placeholder,
  name,
  handleChange,
  value,
}) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </label>
  );
};

export default ProductInput;
