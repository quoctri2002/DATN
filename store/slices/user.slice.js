import { createSlice } from '@reduxjs/toolkit';
import { getMyPetList } from '../thunkApis';

const initialState = {
  profile: null,
};

const myPetsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyPetList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyPetList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload;
      });
  },
});

export default myPetsSlice.reducer;
