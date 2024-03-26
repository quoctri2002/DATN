import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Login, Register } from '../Screens/Auth';

export function AuthNavigation() {
  return (
    <Stack.Navigator 
    screenOptions={({route}) => ({
      headerShown: false,
    })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
