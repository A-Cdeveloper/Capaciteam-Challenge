import { memo, useCallback } from 'react';
import { useQueryState, parseAsInteger } from 'nuqs';
import type { HouseType } from '@/types';
import { HOUSE_TYPE } from '@/types';
import { SelectFilter } from '@/components/ui/filters';

const OPTIONS = Object.values(HOUSE_TYPE).map((type) => ({
  label: type,
  value: type,
}));

const HousesTypeFilter = memo(() => {
  const [houseType, setHouseType] = useQueryState('chamber');
  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const handleTypeChange = useCallback(
    (newType: HouseType | null) => {
      if (newType === null) {
        // Remove chamber from URL completely when "All" is selected
        setHouseType(null);
      } else {
        setHouseType(newType);
      }
      // Reset to page 1 when changing type
      setPage(1);
    },
    [setHouseType, setPage]
  );

  return (
    <SelectFilter<HouseType>
      options={OPTIONS}
      value={houseType as HouseType | null}
      onChange={handleTypeChange}
      label="Filter by Type"
      allOption={true}
      allLabel="All"
    />
  );
});

export default HousesTypeFilter;
