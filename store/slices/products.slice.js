import { createSlice } from '@reduxjs/toolkit';
import { getProductList } from '../thunkApis';

const initialState = {
  products: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
