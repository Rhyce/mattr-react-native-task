import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';

import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';
import { theme } from './theme';
import { MainTabParamList } from './types/ScreenTypes';

const tabNavigator = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  return (
    <tabNavigator.Navigator
      initialRouteName="Activity"
      screenListeners={({ navigation }) => ({
        tabPress: () => {
          Haptics.selectionAsync();
        },
      })}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.pink,
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
