import type { Party, PartyResult } from '@/types';

import { fetchParties } from '@/features/parties/api/partiesApi';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook for fetching parties data with pagination
 * @param page - Current page number (1-based)
 * @param limit - Number of parties per page
 * @returns React Query result with parties data, loading state, and error handling
 * @example
 * const { data, isLoading, error } = useParties(1, 10);
 */
export const useParties = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['parties', page, limit],
    queryFn: async () => {
      const data = await fetchParties(page, limit);

      const flatResults: Party[] = data.results.map((r: PartyResult) => r.party);
      return {
        ...data,
        results: flatResults,
        resultsLength: flatResults.length,
      };
    },
  });
};
