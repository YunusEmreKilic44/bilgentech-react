import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const deleteProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success(`Ürün sepetten silindi`);
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
