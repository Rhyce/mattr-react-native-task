import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserProfile } from '../../types/UserProfile';

interface ProfilesState {
  profiles: UserProfile[];
}
const initialState: ProfilesState = {
  profiles: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { setProfiles, clearProfiles } = profilesSlice.actions;
