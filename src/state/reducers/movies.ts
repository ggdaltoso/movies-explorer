import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { MoviePreview, moviesApi } from '@services/movies';

interface MoviesState {
  movies: MoviePreview[];
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      moviesApi.endpoints.getMovies.matchFulfilled,
      (state, action) => {
        state.movies = [...state.movies, ...action.payload.movies];
      },
    );
  },
});

export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
