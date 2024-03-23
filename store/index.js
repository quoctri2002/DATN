import { configureStore } from '@reduxjs/toolkit';
import myPetsReducer from './slices/mypets.slice';
import productsReducer from './slices/products.slice';

const store = configureStore({
  reducer: {
    myPets: myPetsReducer,
    products: productsReducer,
  },
});

export default store;