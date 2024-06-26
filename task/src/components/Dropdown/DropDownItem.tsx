import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

import { theme } from '../../theme';

interface DropDownItemProps<T> {
  option: T;
  onPress: (option: T) => void;
  active: boolean;
}
export default function DropDownItem<T>({
  option,
  onPress,
  active,
}: DropDownItemProps<T>) {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        onPress(option);
      }}
      style={[
        styles.dropDownButton,
        {
          backgroundColor: active ? theme.colors.pink : undefined,
        },
      ]}
      key={String(option)}>
      <Text
        style={[
          styles.dropDownButtonText,
          {
            color: active ? theme.colors.white : undefined,
          },
        ]}>
        {String(option)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dropDownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xLarge,
    paddingHorizontal: theme.spacing.xxLarge,
    borderRadius: theme.borderRadius.large,
  },
  dropDownButtonText: {
    fontSize: theme.fontSizes.medium,
  },
});
