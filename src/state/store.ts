import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from '@state/reducers/movies';
import authReducer from '@state/reducers/auth';
import { moviesApi } from '@services/movies';
import { authApi } from '@services/auth';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      moviesApi.middleware,
      authApi.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
