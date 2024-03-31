import { View, StyleSheet, Text } from 'react-native';

import InterestsPill from './InterestsPill';
import { theme } from '../../theme';
import { Interests } from '../../types/UserProfile';

interface InterestsSectionProps {
  interests: Interests[];
}
export default function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.interestsHeader}>Interests</Text>
      <View style={styles.innerContainer}>
        {interests.map((interest) => {
          return <InterestsPill key={interest.id} interest={interest.name} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.medium,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: theme.spacing.large,
  },
  interestsHeader: {
    fontWeight: theme.fontWeights.Medium,
  },
});
