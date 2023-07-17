import { createSlice } from "@reduxjs/toolkit";

const initialState = { quantity: null, productId: null };

const cartProductSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    setCartProduct: (state, action) => action.payload,
  },
});

export const { setCartProduct } = cartProductSlice.actions;
export default cartProductSlice.reducer;
