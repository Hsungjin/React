import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import globalStyled from './styles/globalStyled.ts';
import { AlertContextProvider } from '@contexts/AlertContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyled} />
    <AlertContextProvider>
      <App />
    </AlertContextProvider>
  </StrictMode>
);
