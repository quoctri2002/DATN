import { combineReducers, configureStore } from '@reduxjs/toolkit';
import myPetsReducer from './slices/mypets.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productsReducer from './slices/products.slice';
import profileReducer from './slices/profile.slice';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  myPets: myPetsReducer,
  products: productsReducer,
  user: profileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ['payload.user']
    }
  })

});
let persistor = persistStore(store);

export { store, persistor };
