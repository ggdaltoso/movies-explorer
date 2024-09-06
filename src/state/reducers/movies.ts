import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Movie } from '@services/movies';

interface MoviesState {
  selectedMovies: Movie[];
}

const initialState: MoviesState = {
  selectedMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
