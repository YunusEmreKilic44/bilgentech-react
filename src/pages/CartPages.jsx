import { CartContext } from "../context/CartContext";
import "./CartPages.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../redux/cartSlice";
import Button from "../components/UI/Button";

const CartPages = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0,
  );

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Sepetim</h1>
        <p>
          Toplam <strong>{cartItems.length}</strong> urun secildi.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Sepetin su an bos</h2>
          <p>Begendigin urunleri ekleyerek alisverise baslayabilirsin.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img
                  src={item.myImage}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Sil
                  </button>
                </div>
                <strong className="cart-item-price">
                  {item.price}₺ x {item.quantity}
                </strong>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Siparis Ozeti</h2>
            <div className="summary-row">
              <span>Urun Sayisi</span>
              <strong>{cartItems.length}</strong>
            </div>
            <div className="summary-row total">
              <span>Toplam</span>
              <strong>{totalPrice.toFixed(2)}₺</strong>
            </div>
            <button className="checkout-btn">Alisverisi Tamamla</button>
          </aside>
        </div>
      )}
      {cartItems.length > 0 && (
        <Button
          variant="success"
          addClass="mt-2"
          onClick={() => dispatch(resetCart())}
        >
          Sepeti Temizle
        </Button>
      )}
    </div>
  );
};

export default CartPages;
