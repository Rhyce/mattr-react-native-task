import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserProfile } from '../../types/UserProfile';

interface ProfilesState {
  profiles: UserProfile[];
  myProfile: UserProfile | null;
  profilesListRefreshing: boolean;
}
const initialState: ProfilesState = {
  profiles: [],
  myProfile: null,
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
    setMyProfile: (state, action: PayloadAction<UserProfile>) => {
      state.myProfile = action.payload;
    },
  },
});

export const {
  setProfiles,
  clearProfiles,
  setProfilesListRefreshing,
  setMyProfile,
} = profilesSlice.actions;
