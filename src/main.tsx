import './index.css';

import ErrorBoundary from '@/components/ErrorBoundary.tsx';
import { Providers } from '@/providers/index.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Providers />
    </ErrorBoundary>
  </StrictMode>
);
