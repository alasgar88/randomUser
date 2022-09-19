import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feautures/users/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
