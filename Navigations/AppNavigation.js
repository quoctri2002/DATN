import { createStackNavigator } from '@react-navigation/stack';
import { Cart } from '../Screens/Cart/Cart';

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}
