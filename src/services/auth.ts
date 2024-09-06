import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { MOVIES_URL } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIES_URL,
  }),
  endpoints: (builder) => {
    return {
      getToken: builder.query<{ token: string }, void>({
        query: () => {
          return {
            url: '/auth/token',
            method: 'GET',
          };
        },
      }),
    };
  },
});
