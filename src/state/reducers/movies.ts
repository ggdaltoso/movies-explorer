import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface MoviesState {
  movies: [];
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
