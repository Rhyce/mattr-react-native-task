import { View, StyleSheet } from 'react-native';

import InterestsPill from './InterestsPill';
import { theme } from '../../theme';
import { Interests } from '../../types/UserProfile';

interface InterestsSectionProps {
  interests: Interests[];
}
export default function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <View style={styles.container}>
      {interests.map((interest) => {
        return <InterestsPill key={interest.id} interest={interest.name} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: theme.spacing.large,
  },
});
