import { Footer, Header, MainContent } from '@/components/layout';
import Bills from '@/features/bills/components/Bills';
import { Stack } from '@mui/material';
import { NuqsAdapter } from 'nuqs/adapters/react';

function App() {
  return (
    <NuqsAdapter>
      <Stack direction="column" height="100vh">
        <Header />
        <MainContent>
          <Bills />
        </MainContent>
        <Footer />
      </Stack>
    </NuqsAdapter>
  );
}

export default App;
