/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialFilters = [
  "Male",
  "Female",
  "High Price",
  "Low Price",
  "Select a color",
  "Select a price",
];

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
  },
  reducers: {
    productsFilter(state, action) {
      //   console.log(action.payload);
      if (action.payload === "Male" || state.oneFilter) {
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
      if (action.payload) {
        if (!state.filters.includes("Delete Filter")) {
          state.filters = ["Delete Filter", ...state.filters];
        }
      }
      if (action.payload === "Delete Filter") {
        state.filters = initialFilters;
        state.data = storeData;
      }
    },
  },
});

export const { productsFilter } = ProductsSlice.actions;
export default ProductsSlice.reducer;
