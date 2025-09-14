import type { House, HouseResult, HouseType } from '@/types';

import { fetchHouses } from '@/features/houses/api/housesApi';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook for fetching houses data with pagination
 * @param page - Current page number (1-based)
 * @param limit - Number of houses per page
 * @param houseType - Type of house to fetch
 * @returns React Query result with houses data, loading state, and error handling
 * @example
 * const { data, isLoading, error } = useHouses(1, 10);
 */
export const useHouses = (page: number, limit: number, houseType?: HouseType) => {
  return useQuery({
    queryKey: ['houses', page, limit, houseType],
    queryFn: async () => {
      const data = await fetchHouses(page, limit, houseType);

      const flatResults: House[] = data.results.map((r: HouseResult) => r.house);
      return {
        ...data,
        results: flatResults,
        resultsLength: flatResults.length,
      };
    },
  });
};
