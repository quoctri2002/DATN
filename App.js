import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaView } from 'react-native';
import MainContainer from './Navigations/MainContainer';
import AuthNavigation from './Navigations/AuthNavigation';
import Account from './Screens/Profile/Account';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Account />
      </SafeAreaView>
    </Provider>
  );
}
