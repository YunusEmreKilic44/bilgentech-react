import "./ProductCard.css";

const ProductCard = ({ myImage, title, price, desc }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={myImage} alt="" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
        <button onClick={() => {}}>Sepete Ekle</button>
      </div>
    </div>
  );
};

export default ProductCard;
