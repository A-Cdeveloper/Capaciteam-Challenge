import Box from '@mui/material/Box';
import { memo } from 'react';
import { TabSwitcher } from '@/components/ui';

type BillModalTabsProps = {
  activeTab: number;
  onTabChange: (newValue: number) => void;
};

const BillModalTabs = memo(({ activeTab, onTabChange }: BillModalTabsProps) => {
  return (
    <Box sx={{ mb: 3 }}>
      <TabSwitcher
        activeTab={activeTab}
        onTabChange={onTabChange}
        tabs={[
          { label: 'English', value: 0 },
          { label: 'Gaeilge', value: 1 },
        ]}
        ariaLabel="bill details tabs"
      />
    </Box>
  );
});

export default BillModalTabs;
