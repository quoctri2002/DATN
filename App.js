import { Dashboard, Shop } from './Screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Discover from './Screens/Discover/Discover';
import Detail from './Screens/Discover/Detail';
import Profile from './Screens/Profile/Profile';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Shop />
    </SafeAreaView>
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
