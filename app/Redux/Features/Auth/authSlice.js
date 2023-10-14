import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      Cookies.set("token", action.payload.token, {
        expires: Date.now() - oneDay,
      });
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove("token");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
