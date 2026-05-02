import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext
      value={{
        fullName: "Yunus Emre",
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
