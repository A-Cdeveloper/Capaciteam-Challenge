import { MuiProvider } from '@/providers/mui/MuiProvider';
import { QueryProvider } from '@/providers/react-query/QueryProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerConfig';

export const Providers = () => {
  return (
    <QueryProvider>
      <MuiProvider>
        <RouterProvider router={router} />
      </MuiProvider>
    </QueryProvider>
  );
};
