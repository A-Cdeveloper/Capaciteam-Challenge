import type { ApiBill, Bill, BillStatus } from '@/types';

import { fetchBills } from '@/features/bills/api/billsApi';
import { useQuery } from '@tanstack/react-query';

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
