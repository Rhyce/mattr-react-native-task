import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import UserProfilePanelActionButton from './UserProfilePanelActionButton';
import { theme } from '../theme';
import { UserProfile } from '../types/UserProfile';
import { calculateAgeFromDOB } from '../utils/utils';

export default function UserProfilePanel({
  profile,
}: {
  profile: UserProfile;
}) {
  const navigation = useNavigation();
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azay';

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={profile.photos[0].path}
        placeholder={blurhash}
        contentFit="cover"
      />
      <View style={styles.overlayContainer}>
        <BlurView style={styles.blurContainer} tint="prominent" intensity={75}>
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
          <UserProfilePanelActionButton
            onPress={() => {
              navigation.navigate('OtherUserProfile', {
                userId: profile.id,
              });
            }}
          />
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    overflow: 'hidden',
    width: theme.sizes[90],
    borderRadius: theme.borderRadius.xlarge,
  },
  image: {
    aspectRatio: 1,
  },
  overlayContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: theme.spacing.large,
    width: theme.sizes.full,
  },
  blurContainer: {
    width: theme.sizes[95],
    borderRadius: theme.borderRadius.large,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: theme.fontSizes.xlarge,
    fontWeight: theme.fontWeights.Bold,
  },
  locationText: {
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.SemiBold,
  },
});
