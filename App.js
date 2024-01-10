import { Dashboard } from './Screens/Home';
import { Login } from './Screens/Auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import Detail from './Screens/Discover/Detail';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Dashboard />
    </SafeAreaView>
  );
}
