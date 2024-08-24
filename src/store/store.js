import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slices/SliderSlice.jsx";
import productsReducer from "./slices/ProductsSlice.jsx";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
  },
});
