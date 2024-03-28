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
  )
}
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider } from 'react-redux';
// import store from './Store';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Dashboard">
//             <Stack.Screen name="Dashboard" component={Dashboard} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </SafeAreaView>
//     </Provider>
//   );
// }
