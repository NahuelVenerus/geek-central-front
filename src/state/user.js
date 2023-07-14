import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  nickname: null,
  lastName: null,
  direction: null,
  postalCode: null,
  city: null,
  email: null,
  password: null,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
