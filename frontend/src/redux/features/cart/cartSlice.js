import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  subtotal: 0,
  tax: 0,
  taxRate: 0.05,
  shipping: 24,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!existingProduct) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("Item already added");
        existingProduct.quantity += 1;
      }

      updateCartSummary(state);
    },
    updateQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        if (action.payload.type === "increase") {
          product.quantity += 1;
        } else if (action.payload.type === "decrease" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }

      updateCartSummary(state);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => {
        product.id !== action.payload.id;
      });

      updateCartSummary(state);
    },
  },
});

const updateCartSummary = (state) => {
  state.selectedItems = state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  }, 0);

  state.subtotal = state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price);
  }, 0);

  state.tax = state.subtotal * state.taxRate;

  state.totalPrice = state.subtotal + state.tax + state.shipping;
};

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
