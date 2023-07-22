import { createReducer, createAction } from "@reduxjs/toolkit";

export const getProductEdit = createAction("GET_PRODUCT_EDIT");

const initialState = "";

const productReducerEdit = createReducer(initialState, {
  [getProductEdit]: (state, action) => {
    return action.payload || "";
  },
});

export default productReducerEdit;
