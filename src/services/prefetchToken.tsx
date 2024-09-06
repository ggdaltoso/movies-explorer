import { authApi } from '@services/auth';
import { selectAuth } from '@state/reducers/auth';
import { store } from '@state/store';

export function prefetchToken() {
  const { token: existingToken } = selectAuth(store.getState());

  if (!existingToken) {
    store.dispatch(authApi.endpoints.getToken.initiate()).then(({ data }) => {
      if (data) {
        localStorage.setItem('authToken', data.token);
      }
    });
  }
}
