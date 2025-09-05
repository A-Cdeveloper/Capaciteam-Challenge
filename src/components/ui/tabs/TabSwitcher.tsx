import { memo } from 'react';
import { Tabs } from '@/components/ui';

type TabSwitcherProps<T extends number | string> = {
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabs: Array<{ label: string; value: T }>;
  ariaLabel?: string;
};

const TabSwitcher = <T extends number | string>({
  activeTab,
  onTabChange,
  tabs,
  ariaLabel,
}: TabSwitcherProps<T>) => {
  return (
    <Tabs
      value={activeTab}
      onChange={(_, newValue) => onTabChange(newValue as T)}
      tabs={tabs}
      ariaLabel={ariaLabel}
    />
  );
};

export default memo(TabSwitcher) as typeof TabSwitcher;
