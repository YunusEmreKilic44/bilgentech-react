import React, { useContext } from "react";
import "./Button.css";
import { CartContext } from "../../context/CartContext";
const Button = ({ title, variant, size, addClass, children, onClick }) => {
  const value = useContext(CartContext);

  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ""}`;

  return (
    <button onClick={onClick} className={classNames}>
      {title ? title : children}
    </button>
  );
};

export default Button;
