import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { authApi } from '@services/auth';

interface AuthState {
  token: string | null;
}

// initialize token from local storage
const token = localStorage.getItem('authToken');

const initialState: AuthState = {
  token,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.getToken.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          state.token = action.payload.token;
        }
      },
    );
  },
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
