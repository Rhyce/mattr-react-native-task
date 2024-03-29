import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStackNavigator from './src/RootStackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}