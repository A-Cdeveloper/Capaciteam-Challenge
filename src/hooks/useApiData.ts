import { useQuery } from '@tanstack/react-query';

/**
 * Generic hook for fetching API data with pagination and optional filtering
 * @param queryKey - Array of strings for React Query cache key
 * @param fetchFn - Function to fetch data from API
 * @param page - Current page number (1-based)
 * @param limit - Number of items per page
 * @param filter - Optional filter parameter
 * @param transformFn - Optional function to transform results
 * @returns React Query result with data, loading state, and error handling
 * @example
 * const { data, isLoading, error } = useApiData<Bill, ApiBill, BillStatus>(['bills'], fetchBills, 1, 10, 'Current', (r) => r.map(x => x.bill));
 */
export const useApiData = <T, TApiResult, TFilter = undefined>(
  queryKey: string[],
  fetchFn: (
    page: number,
    limit: number,
    filter?: TFilter
  ) => Promise<{ results: TApiResult[]; head: { counts: number }; [key: string]: unknown }>,
  page: number,
  limit: number,
  filter?: TFilter,
  transformFn?: (results: TApiResult[]) => T[]
) => {
  return useQuery({
    queryKey: [...queryKey, page, limit, filter],
    queryFn: async () => {
      const data = await fetchFn(page, limit, filter);
      const flatResults = transformFn
        ? transformFn(data.results)
        : (data.results as unknown as T[]);
      return {
        ...data,
        results: flatResults,
        resultsLength: flatResults.length,
      };
    },
  });
};
