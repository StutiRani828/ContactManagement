import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allProfiles: [],
  profiles: [],
  loading: false,
  error: null,
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      state.allProfiles = action.payload;
      state.profiles = action.payload;
    },
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    updateProfile: (state, action) => {
      const index = state.profiles.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(p => p.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProfiles, addProfile, updateProfile, deleteProfile, setLoading, setError } = profilesSlice.actions;

export const fetchProfiles = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('https://dummyjson.com/users');
    // console.log(initialState.profiles.length)
      dispatch(setProfiles(response.data.users));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default profilesSlice.reducer;
