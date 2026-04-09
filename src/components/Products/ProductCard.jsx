import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ myImage, title, price, desc }) => {
  const [productTitle, setProductTitle] = useState("Title");

  return (
    <div className="product-card">
      <img className="product-image" src={myImage} alt="" />
      <div className="product-info">
        <strong className="product-title">{productTitle}</strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
        <button onClick={() => setProductTitle(title)}>Title Degiştir</button>
      </div>
    </div>
  );
};

export default ProductCard;
