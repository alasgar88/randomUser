import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.user = action.payload;
      state.cartItems = [];
    },
  },
});

export const { newUser } = userSlice.actions;

export default userSlice.reducer;
