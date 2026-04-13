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
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Object.values(product));
    console.log(Object.keys(product));
    console.log(Object.entries(product));

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== "",
    );

    if (!isFormValid) {
      alert("Inputlar Boş Geçilemez!");
      return;
    }

    const newProduct = { ...product, id: Math.random() };
    addNewProduct(newProduct);

    setProduct({
      title: "",
      image: "",
      price: 0,
      description: "",
      category: "",
    });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          handleChange={handleChange}
          {...input}
          type={input.type}
          value={product[input.name]}
        />
      ))}

      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
};

export default AddProductForm;
