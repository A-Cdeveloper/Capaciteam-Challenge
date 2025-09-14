import { createBrowserRouter } from 'react-router-dom';
import BillsPage from '@/pages/BillsPage';

// import PartiesPage from '@/pages/PartiesPage';
// import SearchPage from '@/pages/SearchPage';
// import NotFoundPage from '@/pages/NotFoundPage';
import { routes } from './routes';
import HomePage from '@/pages/HomePage';
import { AppLayout } from '@/components/layout';
import NotFoundPage from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.bills,
        element: <BillsPage />,
      },
    ],
  },
]);
