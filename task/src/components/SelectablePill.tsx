import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '../theme';

interface SelectablePillProps {
  label: string;
  active?: boolean;
  onPress: () => void;
}
export default function SelectablePill({
  label,
  active,
  onPress,
}: SelectablePillProps) {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={[
          styles.text,
          {
            backgroundColor: active
              ? theme.colors.pink
              : theme.colors.palePurple,
            color: active ? theme.colors.white : theme.colors.pink,
          },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: theme.spacing.xlarge,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
  },
});
