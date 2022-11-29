import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-undef
const isEmpty = require('is-empty');

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: {},
    loading: false,
    platform: [],
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, isAuthenticated: !isEmpty(action.payload), user: action.payload };
    },
    setPlatform: (state, action) => {
      return { ...state, platform: action.payload };
    },
    setUserLoading: (state) => {
      return { ...state, loading: true };
    },
  },
});

export const { setUser, setUserLoading, setPlatform } = authSlice.actions;

export default authSlice.reducer;
