import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.user = action.payload;
    },
    addUser: (state, action) => {
      if (state.userList.length - 1 > 10) {
        state.userList.pop();
      }

      state.userList.unshift(action.payload);
    },
  },
});

export const { newUser, addUser } = userSlice.actions;

export default userSlice.reducer;
