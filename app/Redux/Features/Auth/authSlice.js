import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const loginApi = createAsyncThunk('auth/login', async (userData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(data.error);
});

export const registerApi = createAsyncThunk('auth/register', async (userData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
    method: 'POST',
    body: JSON.stringify({
      name: userData.username,
      email: userData.email,
      password: userData.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(data.message);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginApi.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    [registerApi.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },

    [loginApi.rejected]: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    [registerApi.rejected]: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },

    [loginApi.pending]: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    [registerApi.pending]: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
