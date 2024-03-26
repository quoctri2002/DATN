import { configureStore } from '@reduxjs/toolkit';
import myPetsReducer from './slices/mypets.slice';
import productsReducer from './slices/products.slice';
import profileReducer from './slices/profile.slice';

const store = configureStore({
  reducer: {
    myPets: myPetsReducer,
    products: productsReducer,
    user: profileReducer,
  },
});

export default store;