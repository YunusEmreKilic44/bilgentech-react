import React, { useState } from "react";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";

const ProductsPage = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="products-page">
      <Header cartItems={cartItems} />
      <div className="mx-auto">
        <Products setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default ProductsPage;
