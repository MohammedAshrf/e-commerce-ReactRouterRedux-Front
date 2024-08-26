import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slices/SliderSlice.jsx";
import productsReducer from "./slices/ProductsSlice.jsx";
import cartReducer from "./slices/CartSlice.jsx";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
