import { AuthNavigation } from './AuthNavigation';
import { CartNavigation } from './CartNavigation';
import { MainContainer } from './MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export function AppNavigation() {
  const authenticated = useSelector((state) => state.user.authenticated);
  return <NavigationContainer>{!authenticated ? <AuthNavigation /> : <MainContainer />}</NavigationContainer>;
}
