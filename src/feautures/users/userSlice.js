import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { newUser } = userSlice.actions;

export default userSlice.reducer;
