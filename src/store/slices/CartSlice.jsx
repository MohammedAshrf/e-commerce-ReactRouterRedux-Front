import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
    open: false,
  },
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      const newProduct = action.payload;
      const existNewProduct = state.cart.find(
        (product) => product.id === newProduct.id
      );
      if (existNewProduct) {
        existNewProduct.amount++;
      } else {
        state.cart = [...state.cart, newProduct];
        state.totalAmount = state.cart.length;
        state.totalPrice += newProduct.price;
      }
      //===> Another way to put a new element in an array:
      //   state.cartProducts.push(newProduct);
    },
    handleOpen(state) {
      // console.log(action.payload);
      state.open = !state.open;
    },
  },
});

export const { addToCart, handleOpen } = cartSlice.actions;
export default cartSlice.reducer;
