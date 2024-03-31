import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';

type TMainTabNavigator = {
  Activity: undefined;
  Profile: undefined;
};

const tabNavigator = createBottomTabNavigator<TMainTabNavigator>();

export default function MainTabNavigator() {
  return (
    <tabNavigator.Navigator
      initialRouteName="Activity"
      screenOptions={{
        headerShown: false,
      }}>
      <tabNavigator.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                name={props.focused ? 'compass' : 'compass-outline'}
                {...props}
              />
            );
          },
        }}
      />
      <tabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon(props) {
            return <Ionicons name="person" {...props} />;
          },
        }}
      />
    </tabNavigator.Navigator>
  );
}
