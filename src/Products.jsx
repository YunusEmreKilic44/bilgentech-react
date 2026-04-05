import React from "react";
import ProductCard from "./ProductCard";
import productsData from "./productsData";
import "./Products.css";

// Ürünlerle ilgili ana parent component
const Products = () => {
  const image =
    "https://konyaberraksu.com/wp-content/uploads/2019/03/5lt-buyuk.png";
  const title = "Büyük Su";
  const price = 20;
  return (
    <div className="products">
      <h2>Products Component</h2>
      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            myImage={product.image}
            title={product.title}
            price={product.price}
            desc={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
