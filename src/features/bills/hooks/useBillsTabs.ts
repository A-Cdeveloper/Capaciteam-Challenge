import { useQueryState, parseAsString } from 'nuqs';

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

  return {
    activeTab: activeTab as 'all' | 'favorites',
    setActiveTab: setActiveTab as (tab: 'all' | 'favorites') => void,
  };
};
