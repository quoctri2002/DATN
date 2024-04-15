import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../thunkApis';

const initialState = {
  profile: {},
  isLoading: false,
  authenticated: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.authenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
        state.error = action.payload.message;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.profile = action.payload;
      });
  },
});

export const { logout } = profileSlice.actions;
export default profileSlice.reducer;
