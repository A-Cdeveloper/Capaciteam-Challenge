import type { House, HouseResult, HouseType } from '@/types';

import { fetchHouses } from '@/features/houses/api/housesApi';
import { useApiData } from '@/hooks/useApiData';

/**
 * Custom hook for fetching houses data with pagination and filtering
 * @param page - Current page number (1-based)
 * @param limit - Number of houses per page
 * @param houseType - Optional house type filter
 * @returns React Query result with houses data, loading state, and error handling
 * @example
 * const { data, isLoading, error } = useHouses(1, 10, 'dail');
 */
export const useHouses = (page: number, limit: number, houseType?: HouseType) => {
  return useApiData<House, HouseResult, HouseType>(
    ['houses'],
    fetchHouses,
    page,
    limit,
    houseType,
    (results: HouseResult[]) => results.map((r) => r.house)
  );
};
