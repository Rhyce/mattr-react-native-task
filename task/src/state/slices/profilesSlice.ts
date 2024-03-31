import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserProfile } from '../../types/UserProfile';

interface ProfilesState {
  profiles: UserProfile[];
  profilesListRefreshing: boolean;
}
const initialState: ProfilesState = {
  profiles: [],
  profilesListRefreshing: false,
};

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<UserProfile[]>) => {
      state.profiles = action.payload;
    },
    clearProfiles: (state) => {
      state.profiles = [];
    },
    setProfilesListRefreshing: (state, action: PayloadAction<boolean>) => {
      state.profilesListRefreshing = action.payload;
    },
  },
});

export const { setProfiles, clearProfiles, setProfilesListRefreshing } =
  profilesSlice.actions;
