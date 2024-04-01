import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { theme } from '../../theme';

interface FilterScreenSectionProps {
  label: string;
  children: ReactNode;
}
export function FilterScreenSection({
  label,
  children,
}: FilterScreenSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xlarge,
  },
  text: {
    fontSize: theme.fontSizes.medium,
  },
});
