import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { Text, Pressable, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { fetchUserProfiles } from '../../api/profiles';
import { useAppDispatch } from '../../hooks';
import {
  applyFilters,
  selectAreTempFiltersEqualToSetFilters,
} from '../../state/slices/filtersSlice';
import strings from '../../strings';
import { theme } from '../../theme';
export default function ApplyFiltersButton() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const filtersAreEqual = useSelector(selectAreTempFiltersEqualToSetFilters);

  const navigation = useNavigation();
  return (
    <Pressable
      style={[
        styles.button,
        {
          marginVertical:
            Platform.OS === 'android' ? theme.spacing.xxLarge : insets.bottom, // Bottom offset on Android doesn't do anything as the bar seems to be auto-avoided by the OS
          backgroundColor: filtersAreEqual
            ? theme.colors.palePurple
            : theme.colors.pink,
        },
      ]}
      onPress={() => {
        if (filtersAreEqual) {
          return;
        }
        Haptics.selectionAsync();
        dispatch(applyFilters());
        fetchUserProfiles(); // Maybe this shouldn't auto-refetch as refetching when changing sort options probably isn't the expected function.
        navigation.goBack();
      }}>
      <Text
        style={[
          { color: filtersAreEqual ? theme.colors.pink : theme.colors.white },
          styles.text,
        ]}>
        {strings.filters.applyFilters}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.palePurple,
    paddingVertical: theme.spacing.xxLarge,
    marginHorizontal: theme.spacing.xxLarge,
    borderRadius: theme.borderRadius.large,
  },
  text: {
    textAlign: 'center',
    fontSize: theme.fontSizes.large,
  },
});
