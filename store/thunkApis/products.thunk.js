import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductList = createAsyncThunk('products/getProductList', async (category, thunk) => {
    try {
        return await mockProductList(category);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

async function mockProductList(category) {
    new Promise((resolve) => setTimeout(resolve, 1000))
    return (
        [
            {
                id: 1,
                category: 'food',
                image: require('../../assets/images/spFood.png'),
                sale: '16%',
                brand: '123',
                name: 'Josera Mini Deluxe',
                kg: '900',
            },
            {
                id: 2,
                category: 'food',
                image: require('../../assets/images/spFood.png'),
                sale: '',
                brand: 'Royal Cannin',
                name: 'Jađâsdasda',
                kg: '900'
            },
            {
                id: 3,
                category: 'food',
                image: require('../../assets/images/spFood.png'),
                sale: '18%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 4,
                category: 'food',
                image: require('../../assets/images/spFood.png'),
                sale: '20%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 5,
                category: 'vetItem',
                image: require('../../assets/images/vetItem.png'),
                sale: '16%',
                brand: '456',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 6,
                category: 'vetItem',
                image: require('../../assets/images/vetItem.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 7,
                category: 'vetItem',
                image: require('../../assets/images/vetItem.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 8,
                category: 'vetItem',
                image: require('../../assets/images/vetItem.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 9,
                category: 'accessories',
                image: require('../../assets/images/accessorie.png'),
                sale: '16%',
                brand: '789',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 10,
                category: 'accessories',
                image: require('../../assets/images/accessorie.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 11,
                category: 'accessories',
                image: require('../../assets/images/accessorie.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 12,
                category: 'accessories',
                image: require('../../assets/images/accessorie.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 13,
                category: 'devices',
                image: require('../../assets/images/devices.png'),
                sale: '16%',
                brand: '0123',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 14,
                category: 'devices',
                image: require('../../assets/images/devices.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 15,
                category: 'devices',
                image: require('../../assets/images/devices.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
            {
                id: 16,
                category: 'devices',
                image: require('../../assets/images/devices.png'),
                sale: '16%',
                brand: 'Royal Cannin',
                name: 'Josera Mini Deluxe',
                kg: '900'
            },
        ].filter(c => c.category === category)
    );
}
