import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

// Ürünlerle ilgili ana parent component
const Products = () => {
  return (
    <div className="products">
      <h2>Products Component</h2>
      <div className="products-wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
