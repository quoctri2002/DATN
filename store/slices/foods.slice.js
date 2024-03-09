import { createSlice } from '@reduxjs/toolkit';
import { getFoodList } from '../thunkApis';

const initialState = {
  foods: [],
  isLoading: false,
};

const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFoodList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFoodList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foods = action.payload;
      });
  },
});

export default foodsSlice.reducer;
