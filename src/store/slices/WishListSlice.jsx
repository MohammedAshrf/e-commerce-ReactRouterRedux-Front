import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const localStorageData = JSON.parse(localStorage.getItem("localStorageData"));

const wishListSlider = createSlice({
  name: "wishList",
  initialState: {
    wishListData: localStorageData ? localStorageData : [],
  },
  reducers: {
    toWishList(state, action) {
      console.log(action.payload);
      const productId = action.payload;
      let findProduct = storeData.find((item) => item.id === productId);
      let existProduct = state.wishListData.find(
        (item) => item.id === productId
      );
      if (!existProduct) {
        findProduct = { ...findProduct, heart: true };
        state.wishListData = [...state.wishListData, findProduct];
      } else {
        state.wishListData = state.wishListData.filter(
          (product) => product !== existProduct
        );
      }
      localStorage.setItem(
        "localStorageData",
        JSON.stringify(state.wishListData)
      );
    },
    clearWishList(state) {
      state.wishListData = [];
      localStorage.setItem(
        "localStorageData",
        JSON.stringify(state.wishListData)
      );
    },
  },
});

export const { toWishList, clearWishList } = wishListSlider.actions;
export default wishListSlider.reducer;
