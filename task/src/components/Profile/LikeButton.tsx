import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

import { theme } from '../../theme';

interface LikeButtonProps {
  onPress: () => void;
  active: boolean;
}
export default function LikeButton({ onPress, active }: LikeButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name={active ? 'heart' : 'heart-outline'}
        size={40}
        color={theme.colors.pink}
      />
    </Pressable>
  );
}
