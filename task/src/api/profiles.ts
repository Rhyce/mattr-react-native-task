import { setMyProfile, setProfiles } from '../state/slices/profilesSlice';
import store from '../state/store';
import { UserProfile } from '../types/UserProfile';

export const fetchUserProfiles = async () => {
  const profiles = await fetch(
    'https://28e1b64e-ec55-45fb-a4f3-b66784a69049.mock.pstmn.io/users',
  );
  if (!profiles.ok) {
    throw new Error('Error fetching users');
  }
  //Will Probably Filter Here, then return. Tbh this should probably be done server side in a production scenario or through something like GraphQL
  const foundProfiles = (await profiles.json()) as UserProfile[];

  for (let i = foundProfiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [foundProfiles[i], foundProfiles[j]] = [foundProfiles[j], foundProfiles[i]]; // swap elements
  }

  const selectedProfiles = foundProfiles.slice(0, 5);

  store.dispatch(setProfiles(selectedProfiles));
};

export const fetchMyUserProfile = async () => {
  // In reality, this would probably go through a different endpoint and have different logic
  const profiles = await fetch(
    'https://28e1b64e-ec55-45fb-a4f3-b66784a69049.mock.pstmn.io/users',
  );
  if (!profiles.ok) {
    throw new Error('Error fetching users');
  }
  const foundProfiles = (await profiles.json()) as UserProfile[];
  store.dispatch(setMyProfile(foundProfiles[0]));
};
