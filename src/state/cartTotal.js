import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartTotalSlice = createSlice({
  name: "cartTotal",
  initialState,
  reducers: {
    setCartTotal: (state, action) => action.payload,
    setTotalToInitialState: (state, action) => initialState,
  },
});

export const { setCartTotal, setTotalToInitialState } = cartTotalSlice.actions;
export default cartTotalSlice.reducer;
