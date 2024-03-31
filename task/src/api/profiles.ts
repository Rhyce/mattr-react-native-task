import { UserProfile } from '../types/UserProfile';

export const fetchUserProfiles = async (): Promise<UserProfile[]> => {
  const profiles = await fetch(
    'https://28e1b64e-ec55-45fb-a4f3-b66784a69049.mock.pstmn.io/users',
  );
  if (!profiles.ok) {
    throw new Error('Error fetching users');
  }
  //Will Probably Filter Here, then return. Tbh this should probably be done server side in a production scenario or through something like GraphQL
  return profiles.json() as Promise<UserProfile[]>;
};
