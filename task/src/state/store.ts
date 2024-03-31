import { configureStore } from '@reduxjs/toolkit';

import { profilesSlice } from './slices/profilesSlice';

const store = configureStore({
  reducer: {
    profiles: profilesSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
