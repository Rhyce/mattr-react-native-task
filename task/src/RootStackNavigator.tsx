import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigation';
import FilterScreen from './screens/FilterScreen';
import ProfileScreen from './screens/ProfileScreen';

type TRootStackNavigator = {
  TabNavigation: undefined;
  OtherUserProfile: {
    userId: number;
  };
  Filter: undefined;
};

const stackNavigator = createNativeStackNavigator<TRootStackNavigator>();

export default function RootStackNavigator() {
  return (
    <stackNavigator.Navigator
      initialRouteName='TabNavigation'
      screenOptions={{
        headerShown: false,
      }}>
      <stackNavigator.Screen
        name='TabNavigation'
        component={MainTabNavigator}
      />
      <stackNavigator.Screen name='Filter' component={FilterScreen} />
      <stackNavigator.Screen
        name='OtherUserProfile'
        component={ProfileScreen}
      />
    </stackNavigator.Navigator>
  );
}
