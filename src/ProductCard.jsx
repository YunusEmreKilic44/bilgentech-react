import React from "react";

const ProductCard = () => {
  return (
    <div
      className="product-card"
      style={{
        backgroundColor: "red",
        color: "white",
      }}
    >
      <img
        src="https://konyaberraksu.com/wp-content/uploads/2019/03/5lt-buyuk.png"
        alt=""
      />
      <strong>Büyük Su</strong>
      <span>20₺</span>
    </div>
  );
};

export default ProductCard;
