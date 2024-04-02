import { FlashList } from '@shopify/flash-list';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fetchUserProfiles } from '../api/profiles';
import ActivityScreenHeader from '../components/ActivityScreenHeader';
import UserProfilePanel from '../components/UserProfilePanel';
import { useAppSelector } from '../hooks';
import strings from '../strings';
import { theme } from '../theme';
import { loadLikes } from '../utils/utils';

export default function ActivityScreen() {
  const { profiles, profilesListRefreshing } = useAppSelector(
    (state) => state.profiles,
  );

  useEffect(() => {
    (async () => {
      await fetchUserProfiles(); // Realistically I wouldn't call this in the screen itself, Id move it somewhere to run sooner (preventing downtime when launching the app). For this small example app though, I'll leave it here
      await loadLikes(); // Same goes for this.
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityScreenHeader />
      <FlashList
        data={profiles}
        refreshing={profilesListRefreshing}
        onRefresh={fetchUserProfiles}
        renderItem={({ item }) => <UserProfilePanel profile={item} />}
        ListEmptyComponent={<Text>{strings.profileList.noProfiles}</Text>}
        estimatedItemSize={409}
        ItemSeparatorComponent={() => {
          return <View style={styles.listSeparator} />;
        }}
        contentContainerStyle={styles.flashListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listSeparator: {
    height: theme.spacing.xxLarge,
  },
  flashListContainer: {
    paddingVertical: theme.spacing.xLarge,
  },
});
