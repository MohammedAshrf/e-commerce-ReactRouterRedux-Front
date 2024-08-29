/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialFilters = [
  "Male",
  "Female",
  "High Price",
  "Low Price",
  "Select a color",
  "Select a size",
];
const colors = [
  "red",
  "green",
  "purple",
  "yellow",
  "orange",
  "blue",
  "black",
  "brown",
];
const sizes = ["S", "M", "L", "XL"];

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    categories: [
      "Hoodies",
      "Dresses",
      "Shoes",
      "T-Shirts",
      "Jeans",
      "Jackets",
      "Bags",
      "Suits",
    ],
    filters: initialFilters,
    data: storeData,
    colors: colors,
    sizes: sizes,
  },
  reducers: {
    productsFilter(state, action) {
      //   console.log(action.payload);
      if (action.payload === "Male") {
        state.data = storeData.filter((product) => product.gender === "male");
      }
      if (action.payload === "Female") {
        state.data = storeData.filter((product) => product.gender === "female");
      }
      if (action.payload === "High Price") {
        state.data = storeData.filter((product) => product.price >= 300);
      }
      if (action.payload === "Low Price") {
        state.data = storeData.filter((product) => product.price <= 300);
      }

      if (action.payload.filterType === "Select a color") {
        // console.log(action.payload);
        state.data = storeData.filter((product) =>
          product.color.find((color) => color === action.payload.value)
        );
      }
      if (action.payload.filterType === "Select a size") {
        // console.log(action.payload);
        state.data = storeData.filter((product) =>
          product.size?.find((size) => size === action.payload.value)
        );
      }

      if (action.payload) {
        // console.log(action.payload);
        if (!state.filters.includes("Clear Filter")) {
          state.filters = ["Clear Filter", ...state.filters];
        }
      }
      if (action.payload === "Clear Filter") {
        state.filters = initialFilters;
        state.data = storeData;
      }
    },
  },
});

export const { productsFilter } = ProductsSlice.actions;
export default ProductsSlice.reducer;
