import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import { selectAuth } from '@state/reducers/auth';
import { RootState } from '@state/store';
import GetMovies from '@graphql/movies.graphql';
import GetMovie from '@graphql/movie.graphql';
import GetGenres from '@graphql/genres.graphql';

import { MOVIES_URL } from './constants';

export type GenrePreview = {
  id: string;
  title: string;
};

export type Genre = GenrePreview & {
  movies: Movie[];
};

export type MoviePreview = { title: string; id: string; posterUrl: string };

export type Movie = MoviePreview & {
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
  genres: GenrePreview[];
};

export type Pagination = {
  totalPages: number;
  page: number;
  perPage: number;
};

export type MoviesConnection = {
  movies: MoviePreview[];
  pagination: Pagination;
};

export type MovieConnection = {
  movie: Movie;
};

export type GenreConnection = {
  genres: GenrePreview[];
  pagination: Pagination;
};

type MoviesQueryResult = {
  movies: {
    nodes: MoviePreview[];
    pagination: Pagination;
  };
};

type MovieQueryResult = {
  movie: Movie;
};

type GenreQueryResult = {
  genres: {
    nodes: Genre[];
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
    getMovies: builder.query<
      MoviesConnection,
      { pagination: Pick<Pagination, 'page' | 'perPage'> }
    >({
      query: (variables) => ({
        document: GetMovies,
        variables,
      }),
      transformResponse: (response: MoviesQueryResult) => {
        const { nodes, pagination } = response.movies;

        return {
          movies: nodes,
          pagination,
        };
      },
    }),
    getMovie: builder.query<MovieConnection, Pick<Movie, 'id'>>({
      query: (variables) => ({
        document: GetMovie,
        variables,
      }),
      transformResponse: (response: MovieQueryResult) => {
        const { movie } = response;

        return {
          movie,
        };
      },
    }),
    getGenres: builder.query<GenreConnection, void>({
      query: () => ({
        document: GetGenres,
      }),
      transformResponse: (response: GenreQueryResult) => {
        const { nodes, pagination } = response.genres;

        return {
          genres: nodes,
          pagination,
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery } =
  moviesApi;
