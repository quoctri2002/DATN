import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './store';
import { Cart } from './Screens/Cart/Cart';

export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }} >
              <Cart />
          </SafeAreaView>
        </SafeAreaProvider>
    </Provider>
  );
}
