import Box from '@mui/material/Box';
import { memo } from 'react';
import TabSwitcher from '@/components/ui/tabs/TabSwitcher';

type ModalTabsProps = {
  activeTab: string;
  onTabChange: (newValue: string) => void;
  tabs: { label: string; value: string }[];
  'data-testid'?: string;
};

const ModalTabs = memo(({ activeTab, onTabChange, tabs, ...props }: ModalTabsProps) => {
  return (
    <Box sx={{ mb: 3 }} {...props}>
      <TabSwitcher
        activeTab={activeTab}
        onTabChange={onTabChange}
        tabs={tabs as { label: string; value: string }[]}
        ariaLabel="bill details tabs"
      />
    </Box>
  );
});

export default ModalTabs;
