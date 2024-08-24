import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: sliderData.length,
  },
  reducers: {
    nextSlide(state, action) {
      console.log(action.payload);
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      console.log("action ===> " + action.payload);
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    slideBullets(state, action) {
      state.value = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, slideBullets } = sliderSlice.actions;
export default sliderSlice.reducer;
