import { configureStore } from '@reduxjs/toolkit';

import { filtersSlice } from './slices/filtersSlice';
import { profilesSlice } from './slices/profilesSlice';

const store = configureStore({
  reducer: {
    profiles: profilesSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
