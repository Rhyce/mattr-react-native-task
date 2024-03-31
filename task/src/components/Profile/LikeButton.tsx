import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

import { theme } from '../../theme';

export default function LikeButton() {
  return (
    <Pressable>
      <Ionicons name="heart-outline" size={40} color={theme.colors.pink} />
    </Pressable>
  );
}
