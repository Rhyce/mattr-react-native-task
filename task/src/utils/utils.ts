import { DateTime } from 'luxon';

import { AgeRanges, Genders, SortByOptions } from '../enums';
import { UserProfile } from '../types/UserProfile';

export const calculateAgeFromDOB = (dob: string): number => {
  return parseInt(
    DateTime.now()
      .diff(DateTime.fromFormat(dob, 'dd/MM/yyyy'))
      .as('years')
      .toFixed(),
    10,
  );
};

export const isInAgeRange = (
  ageRange: AgeRanges,
  user: UserProfile,
): boolean => {
  const age = calculateAgeFromDOB(user.dob);

  switch (ageRange) {
    case AgeRanges.TWENTY_TO_TWENTY_FOUR:
      return age >= 20 && age <= 24;
    case AgeRanges.TWENTY_FIVE_TO_TWENTY_NINE:
      return age >= 25 && age <= 29;
    case AgeRanges.THIRTY_TO_THIRTY_NINE:
      return age >= 30 && age <= 39;
    case AgeRanges.FORTY_PLUS:
      return age >= 40;
  }
};

export const isGender = (gender: Genders, user: UserProfile) => {
  return user.gender.toLowerCase() === gender.toLowerCase();
};

export const sortUserProfiles = (
  users: UserProfile[],
  sortBy: SortByOptions,
) => {
  return users.sort((a, b) => {
    let comparison = 0;
    if (sortBy === SortByOptions.SCORE) {
      comparison = b.score - a.score;
    } else if (sortBy === SortByOptions.DATE_JOINED) {
      const aDate = DateTime.fromISO(a.created_at).toMillis();
      const bDate = DateTime.fromISO(b.created_at).toMillis();
      comparison = bDate - aDate;
    }
    return comparison;
  });
};
