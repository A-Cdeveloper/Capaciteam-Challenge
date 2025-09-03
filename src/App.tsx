import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MainContent from '@/components/layout/MainContent';
import BillsTable from '@/features/bills/components/BillsTable';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack direction="column" height="100vh">
      <Header />
      <MainContent>
        <BillsTable />
      </MainContent>
      <Footer />
    </Stack>
  );
}

export default App;
