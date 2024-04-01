import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { AgeRanges, Genders, SortByOptions } from '../../enums';
import { RootState } from '../store';

interface FiltersState {
  gender: Genders;
  ageRange: AgeRanges;
  sortBy: SortByOptions;

  tempGender: Genders;
  tempAgeRange: AgeRanges;
  tempSortBy: SortByOptions;
}

const initialState: FiltersState = {
  gender: Genders.FEMALE,
  ageRange: AgeRanges.TWENTY_FIVE_TO_TWENTY_NINE,
  sortBy: SortByOptions.SCORE,

  tempGender: Genders.FEMALE,
  tempAgeRange: AgeRanges.TWENTY_FIVE_TO_TWENTY_NINE,
  tempSortBy: SortByOptions.SCORE,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTempGender: (state, action: PayloadAction<Genders>) => {
      state.tempGender = action.payload;
    },
    setTempAgeRange: (state, action: PayloadAction<AgeRanges>) => {
      state.tempAgeRange = action.payload;
    },
    setTempSortBy: (state, action: PayloadAction<SortByOptions>) => {
      state.tempSortBy = action.payload;
    },
    applyFilters: (state) => {
      state.ageRange = state.tempAgeRange;
      state.gender = state.tempGender;
      state.sortBy = state.tempSortBy;
    },
    resetFilters: (state) => {
      state.ageRange = initialState.ageRange;
      state.gender = initialState.gender;
      state.sortBy = initialState.sortBy;

      state.tempAgeRange = initialState.tempAgeRange;
      state.tempGender = initialState.tempGender;
      state.tempSortBy = initialState.tempSortBy;
    },
  },
});

export const {
  setTempAgeRange,
  setTempGender,
  setTempSortBy,
  applyFilters,
  resetFilters,
} = filtersSlice.actions;

const selectFilters = (state: RootState) => state.filters;

export const selectAreTempFiltersEqualToSetFilters = createSelector(
  [selectFilters],
  (filters) => {
    return (
      filters.gender === filters.tempGender &&
      filters.ageRange === filters.tempAgeRange &&
      filters.sortBy === filters.tempSortBy
    );
  },
);
