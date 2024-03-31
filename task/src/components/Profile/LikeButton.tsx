import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

export default function LikeButton() {
  return (
    <Pressable>
      <Ionicons name="heart-outline" size={40} />
    </Pressable>
  );
}
