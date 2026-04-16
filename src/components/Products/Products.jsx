import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";
import Modal from "./../UI/Modal";
import productsData from "../../data/productsData";
import "./Products.css";

// Ürünlerle ilgili ana parent component
const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);

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
      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />
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
      {isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş geçilemez!"
          onCloseModal={() => setIsShowModal(false)}
        />
      )}
    </div>
  );
};

export default Products;
