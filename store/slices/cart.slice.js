import { createSlice } from '@reduxjs/toolkit';
import { deleteProductFromCart, increaseQtyProduct } from '../thunkApis/carts.thunk';

const initialState = {
carts: [],
isLoading: false,
};

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
        state.carts.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(increaseQtyProduct.fulfilled, (state, action) => {
        const { quantity, productId } = action.payload;

        state.carts = [...state.carts].map((p) => {
            if (p.id === productId) return ({ ...p, quantity })
            return p
        })
    }),
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
        const productId = action.payload
        state.carts = [...state.carts].filter((p) => p.id !== productId)
    })
  },
});

export const { addProductToCart } = cartsSlice.actions
export default cartsSlice.reducer;

