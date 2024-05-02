import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Login, Register, ForgotPassword } from '../Screens/Auth';
import { NavigationContainer } from '@react-navigation/native';

export function AuthNavigation() {
  return (
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
      </Stack.Navigator>
  );
}
