import { configureStore } from '@reduxjs/toolkit';
import myPetsReducer from './slices/mypets.slice';

const store = configureStore({
  reducer: {
    myPets: myPetsReducer,
  },
});

export default store;