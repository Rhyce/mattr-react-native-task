import { FlashList } from '@shopify/flash-list';
import { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fetchMyUserProfile, fetchUserProfiles } from '../api/profiles';
import UserProfilePanel from '../components/UserProfilePanel';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setProfilesListRefreshing } from '../state/slices/profilesSlice';
import { theme } from '../theme';

export default function ActivityScreen() {
  const insets = useSafeAreaInsets();

  const { profiles, profilesListRefreshing } = useAppSelector(
    (state) => state.profiles,
  );
  const dispatch = useAppDispatch();

  const onRefresh = useCallback(async () => {
    dispatch(setProfilesListRefreshing(true));
    await fetchUserProfiles();
    await fetchMyUserProfile();
    dispatch(setProfilesListRefreshing(false));
  }, [dispatch]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

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
        refreshing={profilesListRefreshing}
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
