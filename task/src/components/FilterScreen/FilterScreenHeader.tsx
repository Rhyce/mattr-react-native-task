import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { applyFilters, resetFilters } from '../../state/slices/filtersSlice';
import strings from '../../strings';
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
          Haptics.selectionAsync();
          navigation.goBack();
          // Also clear state if not saved
        }}>
        <Text style={styles.text}>{strings.ctas.cancel}</Text>
      </Pressable>
      <Text style={[styles.text, styles.title]}>{strings.filters.title}</Text>
      <Pressable
        hitSlop={100}
        onPress={() => {
          Haptics.selectionAsync();
          dispatch(resetFilters());
          dispatch(applyFilters());
        }}>
        <Text style={styles.text}>{strings.ctas.clear}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.xLarge,
    backgroundColor: theme.colors.pink,
  },
  text: {
    color: theme.colors.white,
    padding: theme.spacing.medium,
  },
  title: {
    fontWeight: theme.fontWeights.SemiBold,
    fontSize: theme.fontSizes.medium,
  },
});
