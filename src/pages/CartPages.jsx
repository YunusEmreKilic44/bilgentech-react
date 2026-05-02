import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPages.css";

const CartPages = () => {
  const { cartItems, deleteProduct } = useContext(CartContext);
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
                    onClick={() => deleteProduct(item.id)}
                  >
                    Sil
                  </button>
                </div>
                <strong className="cart-item-price">{item.price}₺</strong>
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
    </div>
  );
};

export default CartPages;
