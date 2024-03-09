import { configureStore } from '@reduxjs/toolkit';
import myPetsReducer from './slices/mypets.slice';
import foodsReducer from './slices/foods.slice';

const store = configureStore({
  reducer: {
    myPets: myPetsReducer,
    foods: foodsReducer,
  },
});

export default store;