import type { Party, PartyResult } from '@/types';

import { fetchParties } from '@/features/parties/api/partiesApi';
import { useApiData } from '@/hooks/useApiData';

/**
 * Custom hook for fetching parties data with pagination
 * @param page - Current page number (1-based)
 * @param limit - Number of parties per page
 * @returns React Query result with parties data, loading state, and error handling
 * @example
 * const { data, isLoading, error } = useParties(1, 10);
 */
export const useParties = (page: number, limit: number) => {
  return useApiData<Party, PartyResult, { partyCount: number; resultCount: number }>(
    ['parties'],
    fetchParties,
    page,
    limit,
    undefined,
    (results: PartyResult[]) => results.map((r) => r.party)
  );
};
