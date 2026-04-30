import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  return (
    <CartContext
      value={{
        fullName: "Yunus Emre",
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
