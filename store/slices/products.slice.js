import { createSlice } from '@reduxjs/toolkit';
import { getProductList, getProductListfull, getProductListById} from '../thunkApis';

const initialState = {
  products: [],
  productsByCategory: [],
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
        state.productsByCategory = action.payload;
      })
      .addCase(getProductListfull.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductListfull.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
  },
});

export default productsSlice.reducer;
