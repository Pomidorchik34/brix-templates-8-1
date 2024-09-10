import { combineSlices, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "products",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    add: (state, action) => {
      localStorage.setItem("cart", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    },
    remove: (state, action) => {
      const updated = state.filter((value) => {
        return value.id != action.payload;
      });
      localStorage.setItem("cart", JSON.stringify([...updated]));
      return [...updated];
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
