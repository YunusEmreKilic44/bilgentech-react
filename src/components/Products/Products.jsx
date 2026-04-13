import ProductCard from "./ProductCard";
import productsData from "../../productsData";
import "./Products.css";
import AddProductForm from "./AddProductForm";
import { useState } from "react";

// Ürünlerle ilgili ana parent component
const Products = () => {
  const [products, setProducts] = useState(productsData);

  const addNewProduct = (newProducts) => {
    setProducts((prev) => [newProducts, ...prev]);
  };

  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId,
    );

    setProducts(filteredProducts);
  };

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddProductForm addNewProduct={addNewProduct} />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            myImage={product.image}
            title={product.title}
            price={product.price}
            desc={product.description}
            id={product.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
