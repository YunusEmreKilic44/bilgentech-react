import React from "react";
import "./Button.css";
const Button = ({ title, variant, size, addClass, children }) => {
  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ""}`;

  return <button className={classNames}>{title ? title : children}</button>;
};

export default Button;
