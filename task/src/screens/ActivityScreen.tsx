import { FlashList } from '@shopify/flash-list';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fetchUserProfiles } from '../api/profiles';
import UserProfilePanel from '../components/UserProfilePanel';
import { theme } from '../theme';
import { UserProfile } from '../types/UserProfile';

export default function ActivityScreen() {
  const insets = useSafeAreaInsets();

  const [profiles, setProfiles] = useState<UserProfile[]>();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await onRefresh();
    })();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    const fetchedProfiles = await fetchUserProfiles();
    setProfiles(fetchedProfiles);
    setRefreshing(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Text>Activity</Text>
      <FlashList
        data={profiles}
        extraData={profiles}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => <UserProfilePanel profile={item} />}
        ListEmptyComponent={<Text>Nothing Here</Text>}
        estimatedItemSize={409}
        ItemSeparatorComponent={() => {
          return <View style={styles.listSeparator} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listSeparator: {
    height: theme.spacing.xxlarge,
  },
});
