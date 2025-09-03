import type { ApiBill, Bill } from '@/types';

import { fetchBills } from '@/features/bills/api/billsApi';
import { useQuery } from '@tanstack/react-query';

export const useBills = (limit: number, skip: number) => {
  return useQuery({
    queryKey: ['bills', limit, skip],
    queryFn: async () => {
      const data = await fetchBills(limit, skip);

      const flatResults: Bill[] = data.results.map((r: ApiBill) => r.bill);
      return { ...data, results: flatResults };
    },
  });
};
