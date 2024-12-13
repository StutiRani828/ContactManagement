import { configureStore } from '@reduxjs/toolkit';
import profilesReducer from '../features/profilesSlice';

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
  },
});
