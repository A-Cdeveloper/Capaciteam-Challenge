import { Footer, Header, MainContent } from '@/components/layout';
import BillsPage from '@/pages/BillsPage';
import Stack from '@mui/material/Stack';
import { NuqsAdapter } from 'nuqs/adapters/react';

function App() {
  return (
    <NuqsAdapter>
      <Stack direction="column" height="100vh">
        <Header />
        <MainContent>
          <BillsPage />
        </MainContent>
        <Footer />
      </Stack>
    </NuqsAdapter>
  );
}

export default App;
