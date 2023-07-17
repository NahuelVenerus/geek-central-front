import { createSlice } from "@reduxjs/toolkit";

const initialState = { quantity, productId };

const cartProductSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    setCartProduct: (state, action) => action.payload,
  },
});

export const { setCartProduct } = cartProductSlice.actions;
export default cartProductSlice.reducer;
