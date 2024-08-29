import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));
const savedOpen = JSON.parse(localStorage.getItem("open"));
const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
const savedTotalAmount = JSON.parse(localStorage.getItem("totalAmount"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: savedCart?.length > 0 ? savedCart : [],
    totalAmount: savedTotalAmount ? savedTotalAmount : 0,
    totalPrice: savedTotalPrice ? savedTotalPrice : 0,
    open: savedOpen ? savedOpen : false,
  },
  reducers: {
    addToCart(state, action) {
      // console.log(action.payload);
      const newProduct = action.payload;
      console.log(newProduct.amount);
      const existNewProduct = state.cart.find(
        (product) =>
          product.id === newProduct.id &&
          product.size === newProduct.size &&
          product.color === newProduct.color
      );
      // console.log(existNewProduct ? true : false);
      if (existNewProduct) {
        existNewProduct.amount++;
        state.totalAmount += newProduct.amount;
        state.totalPrice += newProduct.price;
      } else {
        state.cart.push(newProduct);
        state.totalAmount += newProduct.amount;
        state.totalPrice += newProduct.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));

      //===> Another way to put a new element in an array:
      // state.cart = [...state.cart, newProduct];
    },
    removeFromCart(state, action) {
      const thisProduct = action.payload;
      // console.log("Removing product:", thisProduct);

      if (thisProduct) {
        const findThisProduct = state.cart.find(
          (product) =>
            product.id == thisProduct.id &&
            product.size == thisProduct.size &&
            product.color == thisProduct.color
        );
        state.cart = state.cart.filter(
          (product) => findThisProduct !== product
        );
        state.totalPrice -= findThisProduct.amount * findThisProduct.price;
        state.totalAmount -= findThisProduct.amount;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      }
    },
    handleOpen(state) {
      state.open = !state.open;
      localStorage.setItem("open", state.open);
    },
    changeAmount(state, action) {
      console.log(action.payload);
      const thisProduct = action.payload;

      const findThisProduct = state.cart.find(
        (product) =>
          product.id == thisProduct.id &&
          product.size == thisProduct.size &&
          product.color == thisProduct.color
      );

      if (thisProduct.value === "increament") {
        findThisProduct.amount++;
        state.totalAmount++;
        state.totalPrice += findThisProduct.price;
      } else {
        findThisProduct.amount--;
        state.totalAmount--;
        state.totalPrice -= findThisProduct.price;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    // decreaseAmount(state, action) {
    //   console.log(action.payload);
    // },
  },
});

export const { addToCart, removeFromCart, handleOpen, changeAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
