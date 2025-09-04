import { memo } from 'react';
import { Tabs as UITabs } from '@/components/ui';

type BillModalTabsProps = {
  activeTab: number;
  onTabChange: (newValue: number) => void;
};

const BillModalTabs = memo(({ activeTab, onTabChange }: BillModalTabsProps) => {
  return (
    <UITabs
      value={activeTab}
      onChange={(_, newValue) => onTabChange(newValue)}
      tabs={[
        { label: 'English', value: 0 },
        { label: 'Gaeilge', value: 1 },
      ]}
      ariaLabel="bill details tabs"
    />
  );
});

export default BillModalTabs;
