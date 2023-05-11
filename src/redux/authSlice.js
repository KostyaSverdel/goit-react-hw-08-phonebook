import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './api';

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
      });
  }
});

export { authSlice };
