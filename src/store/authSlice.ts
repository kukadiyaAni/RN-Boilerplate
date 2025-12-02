// src/store/auth/authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // call this after a successful login API response
    setAuth: (
      state,
      action: PayloadAction<{user: User; token: string}>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const {setAuth, logout} = authSlice.actions;
export default authSlice.reducer;
