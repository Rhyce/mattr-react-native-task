import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { DateTime } from 'luxon';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fetchUserProfiles } from '../api/profiles';
import { theme } from '../theme';

export default function ActivityScreenHeader() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <View>
        <Text style={styles.dailyConnectionsText}>Daily Connections</Text>
        <Text style={styles.currentDateText}>
          {DateTime.now().toFormat('dd LLL')}
        </Text>
      </View>
      <View style={styles.rightSide}>
        <Pressable
          onPress={() => {
            navigation.navigate('Filter');
          }}>
          <Ionicons
            name="filter"
            size={theme.fontSizes.xLarge}
            color={theme.colors.white}
          />
        </Pressable>
        <Pressable
          onPress={async () => {
            await fetchUserProfiles();
          }}>
          <Ionicons
            name="refresh"
            size={theme.fontSizes.xLarge}
            color={theme.colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.pink,
    paddingBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.xLarge,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dailyConnectionsText: {
    fontSize: theme.fontSizes.xLarge,
    fontWeight: theme.fontWeights.Bold,
    color: theme.colors.white,
  },
  currentDateText: {
    fontSize: theme.fontSizes.large,
    fontWeight: theme.fontWeights.Bold,
    color: theme.colors.white,
  },
  rightSide: {
    flexDirection: 'row',
    gap: theme.spacing.xLarge,
  },
});
