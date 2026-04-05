import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  const image =
    "https://konyaberraksu.com/wp-content/uploads/2019/03/5lt-buyuk.png";
  const title = "Büyük Su";
  const price = 20;

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
