import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClippyProvider } from '@react95/clippy';
import App from './App.tsx';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <ClippyProvider>
      <App />
    </ClippyProvider> */}
  </StrictMode>,
);
