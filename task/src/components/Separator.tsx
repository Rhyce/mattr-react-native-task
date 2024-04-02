import { StyleSheet, View } from 'react-native';

import { theme } from '../theme';

export default function Separator() {
  return <View style={styles.main} />;
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.antiFlashWhite,
    height: theme.spacing.medium,
    borderRadius: theme.borderRadius.large,
  },
});
