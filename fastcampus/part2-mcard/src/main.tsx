import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import globalStyled from './styles/globalStyled.ts';
import { AlertContextProvider } from '@contexts/AlertContext.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthGuard from '@/components/auth/AuthGuard';

const client = new QueryClient({
  defaultOptions: {},
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyled} />
    <QueryClientProvider client={client}>
      <AlertContextProvider>
        <AuthGuard>
          <App />
        </AuthGuard>
      </AlertContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
