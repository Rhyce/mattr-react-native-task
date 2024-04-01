import { ScrollView, View, StyleSheet } from 'react-native';

import DropDownSelector from '../components/Dropdown/DropDownSelector';
import ApplyFiltersButton from '../components/FilterScreen/ApplyFiltersButton';
import FilterScreenHeader from '../components/FilterScreen/FilterScreenHeader';
import { FilterScreenSection } from '../components/FilterScreen/FilterScreenSection';
import SelectablePill from '../components/SelectablePill';
import { Genders, AgeRanges, SortByOptions } from '../enums';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  setTempAgeRange,
  setTempGender,
  setTempSortBy,
} from '../state/slices/filtersSlice';
import { theme } from '../theme';

export default function FilterScreen() {
  const filtersState = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <FilterScreenHeader />
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.inner}>
            <FilterScreenSection label="Gender">
              <View style={styles.pillSelectorContainer}>
                {Object.values(Genders).map((gender) => (
                  <SelectablePill
                    key={gender}
                    label={gender}
                    onPress={() => {
                      dispatch(setTempGender(gender));
                    }}
                    active={filtersState.tempGender === gender}
                  />
                ))}
              </View>
            </FilterScreenSection>
            <FilterScreenSection label="Age Ranges">
              <View style={styles.pillSelectorContainer}>
                {Object.values(AgeRanges).map((ageRange) => (
                  <SelectablePill
                    key={ageRange}
                    label={ageRange}
                    onPress={() => {
                      dispatch(setTempAgeRange(ageRange));
                    }}
                    active={filtersState.tempAgeRange === ageRange}
                  />
                ))}
              </View>
            </FilterScreenSection>
            <FilterScreenSection label="Sort By">
              <DropDownSelector
                selectedValue={filtersState.tempSortBy}
                onValueChange={(value, index) => {
                  dispatch(setTempSortBy(value));
                }}
                options={Object.values(SortByOptions)}
              />
            </FilterScreenSection>
          </View>
        </View>
      </ScrollView>
      <ApplyFiltersButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    paddingHorizontal: theme.spacing.xxlarge,
  },
  inner: {
    gap: theme.spacing.xxlarge,
    paddingVertical: theme.spacing.xxlarge,
  },
  pillSelectorContainer: {
    flexDirection: 'row',
    gap: theme.spacing.medium,
  },
});
