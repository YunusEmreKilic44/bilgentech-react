import React from "react";
import "./Button.css";
const Button = ({ title, variant, size, addClass }) => {
  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ""}`;

  return <button className={classNames}>{title}</button>;
};

export default Button;
