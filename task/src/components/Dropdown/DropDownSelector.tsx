import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

import DropDownItem from './DropDownItem';
import { theme } from '../../theme';

interface DropDownSelectorProps<T> {
  selectedValue: T;
  onValueChange: (itemValue: T, itemIndex: number) => void;
  options: T[];
}

export default function DropDownSelector<T>({
  selectedValue,
  onValueChange,
  options,
}: DropDownSelectorProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsOpen(!isOpen)} style={styles.mainButton}>
        <Text style={styles.mainCurrentOptionText}>
          {String(selectedValue)}
        </Text>
        {isOpen ? (
          <Ionicons name="chevron-up" size={16} color={theme.colors.black} />
        ) : (
          <Ionicons name="chevron-down" size={16} color={theme.colors.black} />
        )}
      </Pressable>
      {isOpen && (
        <View style={styles.dropDownContainer}>
          {options.map((option, index) => (
            <DropDownItem
              key={index}
              option={option}
              onPress={() => {
                onValueChange(option, index);
                setIsOpen(false);
              }}
              active={selectedValue === option}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.medium,
  },
  mainCurrentOptionText: {
    fontSize: theme.fontSizes.medium,
  },
  mainButton: {
    borderWidth: theme.spacing.one,
    borderColor: theme.colors.antiFlashWhite,
    borderRadius: theme.borderRadius.large,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.xlarge,
    paddingHorizontal: theme.spacing.xxlarge,
  },
  dropDownContainer: {
    gap: theme.spacing.medium,
    backgroundColor: theme.colors.antiFlashWhite,
    padding: theme.spacing.xlarge,
    borderRadius: theme.borderRadius.medium,
  },
});
