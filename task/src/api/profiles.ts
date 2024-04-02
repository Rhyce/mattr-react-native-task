import {
  setMyProfile,
  setProfiles,
  setProfilesListRefreshing,
} from '../state/slices/profilesSlice';
import store from '../state/store';
import { UserProfile } from '../types/UserProfile';
import { isGender, isInAgeRange, sortUserProfiles } from '../utils/utils';

export const fetchUserProfiles = async () => {
  store.dispatch(setProfilesListRefreshing(true));
  const filters = store.getState().filters;

  const profiles = await fetch(
    'https://660b6758ccda4cbc75dcc2b4.mockapi.io/users',
  );

  if (!profiles.ok) {
    throw new Error('Error fetching users. Profiles not OK');
  }

  const foundProfiles = (await profiles.json()) as UserProfile[];
  // console.log((await profiles.json())[0]);

  foundProfiles.shift(); // This is removing the first user, the one we're using as "Us" below

  //Will Filter Here. Tbh this should probably be done server side in a production scenario or through something like GraphQL
  // Filter by gender
  const filteredProfiles = foundProfiles.filter(
    (profile) =>
      isGender(filters.gender, profile) &&
      isInAgeRange(filters.ageRange, profile),
  );

  // Shuffle foundProfiles using Fisher-Yates (Knuth) shuffle
  for (let i = filteredProfiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [filteredProfiles[i], filteredProfiles[j]] = [
      filteredProfiles[j],
      filteredProfiles[i],
    ]; // swap elements
  }

  const selectedProfiles = filteredProfiles.slice(0, 5);

  const sortedProfiles = sortUserProfiles(selectedProfiles, filters.sortBy);

  store.dispatch(setProfiles(sortedProfiles));
  await fetchMyUserProfile();
  store.dispatch(setProfilesListRefreshing(false));
};

export const fetchMyUserProfile = async () => {
  // In reality, this might go through a different endpoint and have different logic
  const profiles = await fetch(
    'https://660b6758ccda4cbc75dcc2b4.mockapi.io/users',
  );
  if (!profiles.ok) {
    throw new Error('Error fetching users');
  }
  const foundProfiles = (await profiles.json()) as UserProfile[];
  store.dispatch(setMyProfile(foundProfiles[0]));
};
