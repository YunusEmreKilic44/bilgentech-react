import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const findCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id,
      );

      if (findCartItem) {
        state.cartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === payload.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      } else {
        state.cartItems = [{ ...payload, quantity: 1 }, ...state.cartItems];
      }

      toast.success(`${payload.title} sepete eklendi`);
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
