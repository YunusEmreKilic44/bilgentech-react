import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login } from "../services/authService";

const tokenFromStorage = localStorage.getItem("token");
const loginErrorMessage = "Giris islemi sirasinda hata olustu";

const initialState = {
  token: tokenFromStorage || null,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await login({
        username: formData.username,
        password: formData.password,
      });

      return response.data;
    } catch (error) {
      toast.error(loginErrorMessage);
      return rejectWithValue(
        error.response?.data?.message || loginErrorMessage,
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.token = action.payload.token;

        localStorage.setItem("token", state.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
