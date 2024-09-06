import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { selectAuth } from '@state/reducers/auth';
import { RootState } from '@state/store';
import { MOVIES_URL } from './constants';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIES_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = selectAuth(state);

      if (token) {
        // include token in req header
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: '/movies',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
