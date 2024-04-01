import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { Pressable, StyleSheet } from 'react-native';

import { theme } from '../../theme';

interface ProfileBackButtonProps {
  onPressed: () => void;
}
export default function ProfileBackButton({
  onPressed,
}: ProfileBackButtonProps) {
  return (
    <BlurView style={styles.container}>
      <Pressable onPress={onPressed}>
        <Ionicons name="close" size={34} />
      </Pressable>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.xLarge,
    overflow: 'hidden',
    padding: theme.spacing.medium,
  },
});
