import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import { selectAuth } from '@state/reducers/auth';
import { RootState } from '@state/store';
import GetMovies from '@graphql/movies.graphql';

import { MOVIES_URL } from './constants';

export type Genre = {
  id: string;
  title: string;
  movies: Movie[];
};

export type GenreWithoutMovies = {
  id: string;
  title: string;
};

export type Movie = {
  id: string;
  title: string;
  posterUrl: string;
  summary: string;
  duration: string;
  directors: string[];
  mainActors: string[];
  datePublished: string;
  rating: string;
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  writers: string[];
  genres: GenreWithoutMovies[];
};

export type MoviePreview = { title: string; id: string };

export type Pagination = {
  totalPages: number;
  page: number;
  perPage: number;
};

export type MovieConnection = {
  movies: MoviePreview[];
  pagination: Pagination;
};

type MovieQueryResult = {
  movies: {
    nodes: MoviePreview[];
    pagination: Pagination;
  };
};

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: graphqlRequestBaseQuery({
    url: `${MOVIES_URL}/graphql`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { token } = selectAuth(state);

      if (token) {
        // include token in req header
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieConnection, void>({
      query: () => ({
        document: GetMovies,
      }),
      transformResponse: (response: MovieQueryResult) => {
        const { nodes, pagination } = response.movies;

        return {
          movies: nodes,
          pagination,
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
