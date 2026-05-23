import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage = localStorage.getItem("token");

const initialState = {
  token: tokenFromStorage || null,
  isAuthenticated: !!tokenFromStorage,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.token;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem("token", payload.token);
    },
    setAuthError: (state, { payload }) => {
      state.error = payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});

export default authSlice.reducer;
export const { logout, setAuthError, setCredentials } = authSlice.actions;
