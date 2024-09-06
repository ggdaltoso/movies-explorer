import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ClippyProvider } from '@react95/clippy';

import { prefetchToken } from '@services/prefetchToken';
import { store } from '@state/store';

import App from './App.tsx';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import './index.css';

prefetchToken();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <ClippyProvider>
      <App />
    </ClippyProvider> */}
  </StrictMode>,
);
