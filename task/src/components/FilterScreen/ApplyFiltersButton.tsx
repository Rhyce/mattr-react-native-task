import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { fetchUserProfiles } from '../../api/profiles';
import { useAppDispatch } from '../../hooks';
import {
  applyFilters,
  selectAreTempFiltersEqualToSetFilters,
} from '../../state/slices/filtersSlice';
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
            Platform.OS === 'android' ? theme.spacing.xxLarge : insets.bottom, // Bottom offset on Android doesn't do anything as the touchbar seems to be auto-avoided by the OS
          backgroundColor: filtersAreEqual
            ? theme.colors.palePurple
            : theme.colors.pink,
        },
      ]}
      onPress={() => {
        if (filtersAreEqual) {
          return;
        }
        dispatch(applyFilters());
        fetchUserProfiles();
        navigation.goBack();
      }}>
      <Text
        style={[
          { color: filtersAreEqual ? theme.colors.pink : theme.colors.white },
          styles.text,
        ]}>
        Apply Filters
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
