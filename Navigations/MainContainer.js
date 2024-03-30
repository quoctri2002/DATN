import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

//Screens
import { Dashboard } from '../Screens/Home';
import { Profile } from '../Screens/Profile';
import { CartNavigation } from './CartNavigation';

// Screen names
const homeName = 'Home';
const profileName = 'Profile';
const shopName = 'Purchase';

const Tab = createBottomTabNavigator();

export function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName="homeName"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: 'true',
        tabBarActiveBackgroundColor: '#327030',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: { backgroundColor: '#5CB15A', width: '100%', height: '6%' },
        tabBarLabelStyle: {
          fontSize: 10,
          color: '#FFFFFF',
          fontWeight: '500',
        },
        tabBarItemStyle: {
          borderRadius: 100,
          height: '90%',
          alignSelf: 'center',
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = 'home';
          } else if (rn === profileName) {
            iconName = 'user';
          } else if (rn === shopName) {
            iconName = 'shopping-bag';
          }

          return <Feather name={iconName} size={25} color="#FFFFFF" />;
        },
      })}>
      <Tab.Screen name={homeName} component={Dashboard} />
      <Tab.Screen name={shopName} component={CartNavigation} />
      <Tab.Screen name={profileName} component={Profile} />
    </Tab.Navigator>
  );
}
