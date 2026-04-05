import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
};

export default ProductCard;
