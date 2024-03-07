import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFoodList = createAsyncThunk('food/getFoodList', async (_, thunk) => {
  try {
    const ListFood = [
        {
            id: 1,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900',
        },
        {
            id: 2,
            image: require('../../assets/images/spFood.png'),
            sale: '',
            brand: 'Royal Cannin',
            name: 'Jađâsdasda',
            kg: '900'
        },
        {
            id: 3,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900'
        },
        {
            id: 4,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900'
        },
        {
            id: 5,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900'
        },
        {
            id: 6,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900'
        },
        {
            id: 7,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900'
        },
        {
            id: 8,
            image: require('../../assets/images/spFood.png'),
            sale: '16%',
            brand: 'Royal Cannin',
            name: 'Josera Mini Deluxe',
            kg: '900'
        },
    ];
    return ListFood;
  } catch (error) {
    return thunk.rejectWithValue(error);
  }
});
