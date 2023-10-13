import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const loginApi = createAsyncThunk("auth/login", async (userData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(data.error);
});

export const registerApi = createAsyncThunk(
  "auth/register",
  async (userData) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
      {
        method: "POST",
        body: JSON.stringify({
          name: userData.username,
          email: userData.email,
          password: userData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(data.message);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        console.log("pending", state.token);
      })
      .addCase(registerApi.pending, (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        console.log("pending", state.token);
      })
      .addCase(registerApi.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        console.log("pending", state.token);
      })
      .addCase(registerApi.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
