
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaView } from 'react-native';
import MainContainer from './Navigations/MainContainer';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <MainContainer/>
      </SafeAreaView>
    </Provider>
  );
}
