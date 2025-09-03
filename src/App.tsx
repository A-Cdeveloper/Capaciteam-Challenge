import { Footer, Header, MainContent } from '@/components/layout';
import Bills from '@/features/bills/components/Bills';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack direction="column" height="100vh">
      <Header />
      <MainContent>
        <Bills />
      </MainContent>
      <Footer />
    </Stack>
  );
}

export default App;
