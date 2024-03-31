import { DateTime } from 'luxon';

export const calculateAgeFromDOB = (dob: string) => {
  return DateTime.now()
    .diff(DateTime.fromFormat(dob, 'dd/MM/yyyy'))
    .as('years')
    .toFixed();
};
