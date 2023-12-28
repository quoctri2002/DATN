import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
