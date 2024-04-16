import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { SafeAreaView } from 'react-native';
import { AppNavigation } from './Navigations';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
