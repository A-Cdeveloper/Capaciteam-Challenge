import type { ApiErrorResponse, PartiesApiResponse } from '@/types';
import { parseAsInteger } from 'nuqs';

/**
 * Fetches parties data from the Oireachtas API with pagination
 * @param page - Page number (1-based)
 * @param limit - Number of parties per page
 * @returns Promise resolving to API response with parties data
 * @throws {Error} When API request fails or returns error status
 * @example
 * const parties = await fetchParties(1, 10);
 */
export const fetchParties = async (page: number, limit: number): Promise<PartiesApiResponse> => {
  try {
    const skip = (page - 1) * limit;

    // Direktno kreiraj query string sa nuqs parserima
    const queryParams = [
      `skip=${parseAsInteger.serialize(skip)}`,
      `limit=${parseAsInteger.serialize(limit)}`,
    ].join('&');

    const url = `${import.meta.env.VITE_API_BASE_URL}/parties?${queryParams}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: PartiesApiResponse = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while fetching parties');
  }
};
