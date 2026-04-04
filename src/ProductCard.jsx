import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://konyaberraksu.com/wp-content/uploads/2019/03/5lt-buyuk.png"
        alt=""
      />
      <div className="product-info">
        <strong className="product-name">Büyük Su</strong>
        <span className="product-price">20₺</span>
      </div>
    </div>
  );
};

export default ProductCard;
