import type { ApiBill, Bill, BillStatus } from '@/types';

import { fetchBills } from '@/features/bills/api/billsApi';
import { useQuery } from '@tanstack/react-query';

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
  return useQuery({
    queryKey: ['bills', page, limit, billStatus],
    queryFn: async () => {
      const data = await fetchBills(page, limit, billStatus);

      const flatResults: Bill[] = data.results.map((r: ApiBill) => r.bill);
      return {
        ...data,
        results: flatResults,
        resultsLength: flatResults.length,
      };
    },
  });
};
