import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './store';
import { AppNavigation } from './Navigations/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }} >
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}
