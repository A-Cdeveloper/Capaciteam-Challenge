import { createBrowserRouter } from 'react-router-dom';
import BillsPage from '@/pages/BillsPage';

import { routes } from './routes';
import HomePage from '@/pages/HomePage';
import { AppLayout } from '@/components/layout';
import NotFoundPage from '@/pages/NotFoundPage';
import PartiesPage from '@/pages/PartiesPage';
import HousesPage from '@/pages/HousesPage';

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
      {
        path: routes.parties,
        element: <PartiesPage />,
      },
      {
        path: routes.houses,
        element: <HousesPage />,
      },
    ],
  },
]);
