import { useNavigate } from "react-router";
import Button from "../UI/Button";
import "./ProductCard.css";
import { toast } from "react-toastify";
const ProductCard = ({
  myImage,
  title,
  price,
  desc,
  id: productId,
  deleteProduct,
  setCartItems,
}) => {
  const navigate = useNavigate();

  const addToCart = () => {
    setCartItems((prevState) => [
      ...prevState,
      { id: productId, title, price, myImage, desc },
    ]);
    toast.success(`${title} sepete eklendi`);
  };

  return (
    <div className="product-card">
      <img
        className="product-image cursor-pointer"
        src={myImage}
        alt=""
        onClick={() => {
          navigate(`/product-detail/${productId}`);
        }}
      />
      <div className="product-info">
        <strong
          className="product-title cursor-pointer"
          onClick={() => {
            navigate(`/product-detail/${productId}`);
          }}
        >
          {title}
        </strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{desc}</p>
        <Button
          variant="primary"
          size="sm"
          addClass="product-btn"
          onClick={() => addToCart()}
        >
          Sepete Ekle
        </Button>
        <Button
          variant="danger"
          size="sm"
          addClass="product-btn"
          onClick={() => deleteProduct(productId)}
        >
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
