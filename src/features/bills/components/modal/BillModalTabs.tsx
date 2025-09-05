import Box from '@mui/material/Box';
import { memo } from 'react';
import TabSwitcher from '@/components/ui/tabs/TabSwitcher';

type BillModalTabsProps = {
  activeTab: number;
  onTabChange: (newValue: number) => void;
  'data-testid'?: string;
};

const BillModalTabs = memo(({ activeTab, onTabChange, ...props }: BillModalTabsProps) => {
  return (
    <Box sx={{ mb: 3 }} {...props}>
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
