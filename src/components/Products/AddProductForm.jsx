import { useState } from "react";
import Button from "../UI/Button";
import "./AddProductForm.css";
import ProductInput from "./ProductInput";
import { productInputs } from "../../data/productInputs";

const AddProductForm = ({ addNewProduct }) => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: Math.random() };
    addNewProduct(newProduct);
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          name={input.name}
          placeholder={input.placeholder}
          label={input.label}
          handleChange={handleChange}
          type={input.type}
        />
      ))}

      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
};

export default AddProductForm;
