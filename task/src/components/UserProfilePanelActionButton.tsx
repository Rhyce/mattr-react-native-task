import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '../theme';

export default function UserProfilePanelActionButton() {
  return (
    <Pressable style={styles.viewButton}>
      <Text style={styles.viewButtonText}>View</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    borderColor: theme.colors.pink,
    borderWidth: theme.spacing.one,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xlarge,
    paddingVertical: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
  },
  viewButtonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.pink,
    fontWeight: theme.fontWeights.SemiBold,
  },
});
