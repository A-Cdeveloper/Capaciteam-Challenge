import { useQueryState, parseAsInteger } from 'nuqs';
import type { BillStatus } from '@/types';

export const useBillStatusFilter = () => {
  const [billStatus, setBillStatus] = useQueryState('bill_status');
  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const displayValue = (billStatus || 'All') as BillStatus | 'All';

  const handleStatusChange = (newStatus: BillStatus | 'All') => {
    if (newStatus === 'All') {
      // Remove bill_status from URL completely when "All" is selected
      setBillStatus(null);
    } else {
      setBillStatus(newStatus);
    }
    // Reset to page 1 when changing status
    setPage(1);
  };

  return {
    billStatus,
    displayValue,
    handleStatusChange,
  };
};
