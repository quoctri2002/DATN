import { Login } from './Screens/Auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import Discover from './Screens/Discover/Discover';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Discover />
    </SafeAreaView>
  );
}
