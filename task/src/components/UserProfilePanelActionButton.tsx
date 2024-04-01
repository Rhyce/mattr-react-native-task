import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '../theme';

interface UserProfilePanelActionButtonProps {
  onPress: () => void;
}

export default function UserProfilePanelActionButton({
  onPress,
}: UserProfilePanelActionButtonProps) {
  return (
    <Pressable style={styles.viewButton} onPress={onPress}>
      <Text style={styles.viewButtonText}>View</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    borderColor: theme.colors.pink,
    borderWidth: theme.spacing.one,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xLarge,
    paddingVertical: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
  },
  viewButtonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.pink,
    fontWeight: theme.fontWeights.SemiBold,
  },
});
