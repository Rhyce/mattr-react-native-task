import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigation';
import FilterScreen from './screens/FilterScreen';
import ProfileScreen from './screens/ProfileScreen';
import { RootStackParamList } from './types/ScreenTypes';

const stackNavigator = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <stackNavigator.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <stackNavigator.Screen
        name="TabNavigation"
        component={MainTabNavigator}
      />
      <stackNavigator.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal',
          gestureEnabled: false,
        }}
      />
      <stackNavigator.Screen
        name="OtherUserProfile"
        component={ProfileScreen}
        options={{
          animation: 'slide_from_bottom', // For Android
          presentation: 'fullScreenModal', // For iOS - Using both options helps ensure consistency between platforms.
        }}
      />
    </stackNavigator.Navigator>
  );
}
