import { createSlice } from '@reduxjs/toolkit';
import { getProductList, getProductListfull } from '../thunkApis';

const initialState = {
  products: [],
  productsFull: [],
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
        state.products = action.payload;
      })
      .addCase(getProductListfull.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductListfull.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsFull = action.payload;
      });
  },
});

export default productsSlice.reducer;
