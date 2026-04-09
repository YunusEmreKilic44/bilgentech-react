import { useState } from "react";
import Button from "../UI/Button";
import "./AddProductForm.css";

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form className="add-product-form">
      <label>
        Title: {title}
        <input
          type="text"
          placeholder="Bir ürün ismi giriniz!"
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Image URL: {image}
        <input
          type="text"
          placeholder="Bir ürün görseli giriniz!"
          onChange={handleImageChange}
        />
      </label>
      <label>
        Price: {price}
        <input
          type="number"
          placeholder="Bir ürün fiyatı giriniz!"
          onChange={handlePriceChange}
        />
      </label>
      <label>
        Description: {description}
        <input
          type="text"
          placeholder="Bir ürün açıklaması giriniz!"
          onChange={handleDescriptionChange}
        />
      </label>
      <Button variant="primary">Ürünü Ekle</Button>
    </form>
  );
};

export default AddProductForm;
