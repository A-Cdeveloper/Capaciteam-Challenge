import type { ApiBill, Bill, BillStatus } from '@/types';

import { fetchBills } from '@/features/bills/api/billsApi';
import { useApiData } from '@/hooks/useApiData';

/**
 * Custom hook for fetching bills data with pagination and filtering
 * @param page - Current page number (1-based)
 * @param limit - Number of bills per page
 * @param billStatus - Optional bill status filter
 * @returns React Query result with bills data, loading state, and error handling
 * @example
 * const { data, isLoading, error } = useBills(1, 10, 'Current');
 */
export const useBills = (page: number, limit: number, billStatus?: BillStatus) => {
  return useApiData<Bill, ApiBill, { billCount: number; resultCount: number }, BillStatus>(
    ['bills'],
    fetchBills,
    page,
    limit,
    billStatus,
    (results: ApiBill[]) => results.map((r) => r.bill)
  );
};
