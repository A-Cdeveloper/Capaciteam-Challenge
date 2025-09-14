import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { Stack } from '@mui/material';

const AppLayout = () => {
  return (
    <NuqsAdapter>
      <Stack direction="column" height="100vh">
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </Stack>
    </NuqsAdapter>
  );
};

export default AppLayout;
