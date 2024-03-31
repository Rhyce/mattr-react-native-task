import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import RootStackNavigator from './src/RootStackNavigator';
import store from './src/state/store';
import { MainTabParamList, RootStackParamList } from './src/types/ScreenTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, MainTabParamList {}
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
