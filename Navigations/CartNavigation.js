import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import { Cart, Shop, Detail, Pay, Adress, Paymentmethod } from '../Screens/Cart';

const Tab = createBottomTabNavigator();

export function CartNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="Address" component={Adress} />
      <Stack.Screen name="Paymentmethod" component={Paymentmethod} />
    </Stack.Navigator>
  );
}
