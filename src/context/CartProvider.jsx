import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const deleteProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext
      value={{
        fullName: "Yunus Emre",
        cartItems,
        setCartItems,
        deleteProduct,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
