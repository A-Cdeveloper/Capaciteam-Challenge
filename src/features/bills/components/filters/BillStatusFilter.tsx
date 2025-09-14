import { memo, useCallback } from 'react';
import { useQueryState, parseAsInteger } from 'nuqs';
import type { BillStatus } from '@/types';
import { BILL_STATUS } from '@/types';
import { SelectFilter } from '@/components/ui/filters';

const OPTIONS = Object.values(BILL_STATUS).map((status) => ({
  label: status,
  value: status,
}));

const BillStatusFilter = memo(() => {
  const [billStatus, setBillStatus] = useQueryState('bill_status');
  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const handleStatusChange = useCallback(
    (newStatus: BillStatus | null) => {
      if (newStatus === null) {
        // Remove bill_status from URL completely when "All" is selected
        setBillStatus(null);
      } else {
        setBillStatus(newStatus);
      }
      // Reset to page 1 when changing status
      setPage(1);
    },
    [setBillStatus, setPage]
  );

  return (
    <SelectFilter<BillStatus>
      options={OPTIONS}
      value={billStatus as BillStatus | null}
      onChange={handleStatusChange}
      label="Filter by Status"
      allOption={true}
      allLabel="All"
    />
  );
});

export default BillStatusFilter;
