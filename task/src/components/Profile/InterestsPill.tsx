import { StyleSheet, Text } from 'react-native';

import { theme } from '../../theme';

interface InterestsPillProps {
  interest: string;
}
export default function InterestsPill({ interest }: InterestsPillProps) {
  return <Text style={styles.interestText}>{interest}</Text>;
}

const styles = StyleSheet.create({
  interestText: {
    backgroundColor: theme.colors.pink,
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.spacing.medium,
    overflow: 'hidden',
  },
});
