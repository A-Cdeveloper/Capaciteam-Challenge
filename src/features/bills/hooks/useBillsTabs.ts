import { useQueryState, parseAsString } from 'nuqs';
import { useCallback } from 'react';

type UseBillsTabsResponse = {
  activeTab: 'all' | 'favorites';
  setActiveTab: (tab: 'all' | 'favorites') => void;
};

/**
 * Custom hook for managing tabs state with URL synchronization
 *
 * @returns {UseBillsTabsResponse} Object containing activeTab and setActiveTab function
 * @example
 * const { activeTab, setActiveTab } = useBillsTabs();
 */
export const useBillsTabs = (): UseBillsTabsResponse => {
  const [activeTab, setActiveTab] = useQueryState('tab', parseAsString.withDefault('all'));

  const handleSetActiveTab = useCallback(
    (tab: 'all' | 'favorites') => {
      setActiveTab(tab);
    },
    [setActiveTab]
  );

  return {
    activeTab: activeTab as 'all' | 'favorites',
    setActiveTab: handleSetActiveTab,
  };
};
