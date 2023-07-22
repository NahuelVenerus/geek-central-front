import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => action.payload,
    setToInitialState: (state, action) => initialState,
  },
});

export const { setCart, setToInitialState } = cartSlice.actions;
export default cartSlice.reducer;
