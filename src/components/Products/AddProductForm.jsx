import { useState } from "react";
import Button from "../UI/Button";
import "./AddProductForm.css";

const AddProductForm = () => {
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
    console.log("Yeni ürün bilgileri", product);
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Title: {product.title}
        <input
          type="text"
          placeholder="Bir ürün ismi giriniz!"
          onChange={handleChange}
          name="title"
        />
      </label>
      <label>
        Image URL: {product.image}
        <input
          type="text"
          placeholder="Bir ürün görseli giriniz!"
          onChange={handleChange}
          name="image"
        />
      </label>
      <label>
        Price: {product.price}
        <input
          type="number"
          placeholder="Bir ürün fiyatı giriniz!"
          onChange={handleChange}
          name="price"
        />
      </label>
      <label>
        Description: {product.description}
        <input
          type="text"
          placeholder="Bir ürün açıklaması giriniz!"
          onChange={handleChange}
          name="description"
        />
      </label>
      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
};

export default AddProductForm;
