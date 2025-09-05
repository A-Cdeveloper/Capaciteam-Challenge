import AllBills from '@/features/bills/components/AllBills';
import FavoritesBills from '@/features/bills/components/FavoritesBills';
import BillStatusFilter from '@/features/bills/components/filters/BillStatusFilter';
import { useBillsTabs } from '@/features/bills/hooks/useBillsTabs';
import { TabSwitcher } from '@/components/ui';
import { Box } from '@mui/material';

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
      {activeTab === 'all' ? <AllBills /> : <FavoritesBills />}
    </Box>
  );
};

export default BillsPage;
