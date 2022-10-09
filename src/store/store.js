import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import authSlice from "./reducers/authSlice";
import adminSlice from "./reducers/adminSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    admin: adminSlice
  }
});
