import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartsThunk = createAsyncThunk('carts/getCartsThunk', (data, thunk) => {
    try {
        return [
            { id: '', image: '', price: '', title: '', mass: ''}
        ]
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

export const addProductToCart = createAsyncThunk('carts/addProductToCart', async (productId, thunk) => {
    try {
        const product = await axios.post('/api/v1/products/add-product', productId)
        return product
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
})

export const deleteProductFromCart = createAsyncThunk('carts/deleteProductFromCart', async (productId, thunk) =>{
    try {
        await axios.delete('/api/v1/products/delete-product', { productId })
        return productId
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

export const increaseQtyProduct = createAsyncThunk('carts/editProductFromCart',async ({ productId, quantity }, thunk) =>{
    try {
        await axios.put('/api/v1/products/edit-product', { productId, quantity })
        return { productId, quantity }
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});