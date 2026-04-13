import Button from "../UI/Button";
import "./ProductCard.css";

const ProductCard = ({
  myImage,
  title,
  price,
  desc,
  id: productId,
  deleteProduct,
}) => {
  return (
    <div className="product-card">
      <img className="product-image" src={myImage} alt="" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteProduct(productId)}
        >
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
