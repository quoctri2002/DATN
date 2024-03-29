import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator();

import { Cart, Shop, Detail, Pay } from '../Screens/Cart';

export function CartNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen name="Shop" component={Shop} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Pay" component={Pay} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
