import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import myPetsReducer from './slices/mypets.slice';
import productsReducer from './slices/products.slice';
import profileReducer from './slices/profile.slice';
import cartReducer from './test/actionsAddproductcart';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], // Danh sách các reducer muốn lưu trữ
};

const rootReducer = combineReducers({
  myPets: myPetsReducer,
  products: productsReducer,
  cart: cartReducer, // Import reducer cart đúng từ file actionsAddproductcart
  user: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ['payload.user'],
    },
  }),
});

let persistor = persistStore(store);

export { store, persistor };
