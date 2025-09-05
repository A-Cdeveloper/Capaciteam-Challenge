import BillStatusFilter from '@/features/bills/components/filters/BillStatusFilter';
import { useBillsTabs } from '@/features/bills/hooks/useBillsTabs';
import { TabSwitcher } from '@/components/ui';
import Box from '@mui/material/Box';
import { lazy, Suspense } from 'react';
import { Loading } from '@/components/ui';

// Lazy load heavy components for better performance
const AllBills = lazy(() => import('@/features/bills/components/AllBills'));
const FavoritesBills = lazy(() => import('@/features/bills/components/FavoritesBills'));

const BillsPage = () => {
  const { activeTab, setActiveTab } = useBillsTabs();

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <TabSwitcher
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={[
            { label: 'All Bills', value: 'all' },
            { label: 'Favorites', value: 'favorites' },
          ]}
          ariaLabel="bills table tabs"
        />
      </Box>
      <Box sx={{ mb: 2, position: 'relative' }}>
        <BillStatusFilter />
      </Box>
      <Suspense fallback={<Loading />}>
        {activeTab === 'all' ? <AllBills /> : <FavoritesBills />}
      </Suspense>
    </Box>
  );
};

export default BillsPage;
