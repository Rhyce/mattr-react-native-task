import { useNavigation } from '@react-navigation/native';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { applyFilters, resetFilters } from '../../state/slices/filtersSlice';
import { theme } from '../../theme';

export default function FilterScreenHeader() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === 'android' ? insets.top : undefined,
        },
      ]}>
      <Pressable
        onPress={() => {
          navigation.goBack();
          // Also clear state if not saved
        }}>
        <Text style={styles.text}>Cancel</Text>
      </Pressable>
      <Text style={[styles.text, styles.title]}>Filter</Text>
      <Pressable
        onPress={() => {
          dispatch(resetFilters());
          dispatch(applyFilters());
        }}>
        <Text style={styles.text}>Clear All</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.xLarge,
    backgroundColor: theme.colors.pink,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.medium,
  },
  title: {
    fontWeight: theme.fontWeights.SemiBold,
  },
});
