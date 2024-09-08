/* eslint-disable react-refresh/only-export-components */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
import { APIstoreData } from "../APIdata";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const data = await APIstoreData();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

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

const savedData = JSON.parse(localStorage.getItem("savedData"));
const savedFilters = JSON.parse(localStorage.getItem("savedFilters"));

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
    data: [],
    filters: savedFilters ? savedFilters : initialFilters,
    colors: colors,
    sizes: sizes,
    status: "idle",
    error: null,
  },
  reducers: {
    productsFilter(state, action) {
      if (action.payload === "Male") {
        state.data = state.data.filter((product) => product.gender === "male");
      }
      if (action.payload === "Female") {
        state.data = state.data.filter(
          (product) => product.gender === "female"
        );
      }
      if (action.payload === "High Price") {
        state.data = state.data.filter((product) => product.price >= 300);
      }
      if (action.payload === "Low Price") {
        state.data = state.data.filter((product) => product.price <= 300);
      }
      if (action.payload.filterType === "Select a color") {
        state.data = state.data.filter((product) =>
          product.color.find((color) => color === action.payload.value)
        );
      }
      if (action.payload.filterType === "Select a size") {
        state.data = state.data.filter((product) =>
          product.size?.find((size) => size === action.payload.value)
        );
      }
      if (action.payload) {
        if (!state.filters.includes("Clear Filter")) {
          state.filters = ["Clear Filter", ...state.filters];
          localStorage.setItem("savedFilters", JSON.stringify(state.filters));
        }
      }
      if (action.payload === "Clear Filter") {
        state.filters = initialFilters;
        state.data = storeData;
        localStorage.setItem("savedFilters", JSON.stringify(initialFilters));
        localStorage.setItem("savedData", JSON.stringify(storeData));
      } else {
        localStorage.setItem("savedData", JSON.stringify(state.data));
        localStorage.setItem("savedFilters", JSON.stringify(state.filters));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = savedData ? savedData : action.payload.products;
        localStorage.setItem("savedData", JSON.stringify(state.data));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { productsFilter } = ProductsSlice.actions;
export default ProductsSlice.reducer;
