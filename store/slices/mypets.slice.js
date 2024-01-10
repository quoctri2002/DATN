import { createSlice } from '@reduxjs/toolkit';
import { getMyPetList } from '../thunkApis';

const initialState = {
  pets: [],
  isLoading: false,
};

const myPetsSlice = createSlice({
  name: 'myPets',
  initialState,
  reducers: {},
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
