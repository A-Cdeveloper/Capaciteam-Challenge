import BillStatusFilter from '@/features/bills/components/filters/BillStatusFilter';
import { useBillsTabs } from '@/features/bills/hooks/useBillsTabs';
import TabSwitcher from '@/components/ui/tabs/TabSwitcher';
import Box from '@mui/material/Box';
import { lazy, Suspense } from 'react';
import { Loading } from '@/components/ui';

// Lazy load heavy components for better performance
const AllBills = lazy(() => import('@/features/bills/components/AllBills'));
const FavoritesBills = lazy(() => import('@/features/bills/components/FavoritesBills'));

// Tabs configuration - constant reference for better performance
const TABS = [
  { label: 'All Bills', value: 'all' as const },
  { label: 'Favorites', value: 'favorites' as const },
] as { label: string; value: 'all' | 'favorites' }[];

const BillsPage = () => {
  const { activeTab, setActiveTab } = useBillsTabs();

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <TabSwitcher
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={TABS}
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
