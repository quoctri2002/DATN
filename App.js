import 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import { SafeAreaView } from 'react-native';
import { AppNavigation } from './Navigations';
import {HomeScreen} from './Screens/Home/index';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}
