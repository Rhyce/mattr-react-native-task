import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { useCallback, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ProfileBackButton from '../components/Profile/BackButton';
import InterestsSection from '../components/Profile/InterestsSection';
import LikeButton from '../components/Profile/LikeButton';
import { useAppSelector } from '../hooks';
import { theme } from '../theme';
import { MainTabParamList, RootStackParamList } from '../types/ScreenTypes';
import { UserProfile } from '../types/UserProfile';
import { addNewLike, calculateAgeFromDOB } from '../utils/utils';

type ProfileScreenProps =
  | NativeStackScreenProps<RootStackParamList, 'OtherUserProfile'>
  | BottomTabScreenProps<MainTabParamList, 'Profile'>;

export default function ProfileScreen({
  navigation,
  route,
}: ProfileScreenProps) {
  const [profile, setUserProfile] = useState<UserProfile | null>();
  const [isMyProfile, setIsMyProfile] = useState<boolean>();

  const insets = useSafeAreaInsets();
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azay';

  const myProfile = useAppSelector((state) => state.profiles.myProfile);
  const otherUserProfile = useAppSelector((state) =>
    state.profiles.profiles.find(
      (profile) => profile.id === route.params?.userId,
    ),
  );

  const likedUser = useAppSelector((state) =>
    state.profiles.likedUsers.find((id) => id === profile?.id),
  );

  useFocusEffect(
    useCallback(() => {
      const userId = route.params?.userId;

      const profile = userId ? otherUserProfile : myProfile;
      setUserProfile(profile);
      setIsMyProfile(!userId);
    }, [myProfile, otherUserProfile, route.params?.userId]),
  );

  if (!profile) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <PagerView style={styles.image}>
          {profile.photos.map((photo) => {
            return (
              <Image
                key={photo.id}
                style={styles.image}
                source={photo.path}
                placeholder={blurhash}
                contentFit="cover"
              />
            );
          })}
        </PagerView>
        <View style={styles.overlayContainer}>
          <View
            style={[
              styles.blurContainer,
              styles.headerContainer,
              {
                paddingTop: insets.top,
              },
            ]}>
            {!isMyProfile && (
              <ProfileBackButton
                onPressed={() => {
                  navigation.goBack();
                }}
              />
            )}
          </View>
          <BlurView
            style={styles.blurContainer}
            tint="prominent"
            intensity={75}>
            <View style={styles.textContainer}>
              <Text
                style={
                  styles.nameText
                }>{`${profile.first_name} ${profile.last_name}, ${calculateAgeFromDOB(profile.dob)}`}</Text>
              <Text
                style={
                  styles.locationText
                }>{`${profile.location.city}, ${profile.location.country}`}</Text>
            </View>
            {!isMyProfile && (
              <LikeButton
                onPress={() => {
                  addNewLike(profile.id);
                }}
                active={Boolean(likedUser)}
              />
            )}
          </BlurView>
        </View>
      </View>
      <View style={styles.lowerSectionContainer}>
        <Text>{profile.bio}</Text>
        <InterestsSection interests={profile.interests} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: theme.sizes.full,
    paddingBottom: theme.spacing.xLarge,
  },
  image: {
    aspectRatio: 0.7,
  },
  overlayContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    justifyContent: 'space-between',
    width: theme.sizes.full,
  },
  headerContainer: {
    justifyContent: 'flex-end',
  },
  blurContainer: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.xLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    gap: theme.spacing.small,
  },
  nameText: {
    fontSize: theme.fontSizes.xLarge,
    fontWeight: theme.fontWeights.Bold,
  },
  locationText: {
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.SemiBold,
  },
  lowerSectionContainer: {
    width: theme.sizes[95],
    paddingTop: theme.spacing.large,
    alignSelf: 'center',
    gap: theme.spacing.large,
  },
});
