import type { ApiErrorResponse, HousesApiResponse, HouseType } from '@/types';
import { parseAsInteger } from 'nuqs';

/**
 * Fetches houses data from the Oireachtas API with pagination and filtering
 * @param page - Page number (1-based)
 * @param limit - Number of houses per page
 * @param houseType - Optional house type filter (dail, seanad, dail & seanad)
 * @returns Promise resolving to API response with houses data
 * @throws {Error} When API request fails or returns error status
 * @example
 * const houses = await fetchHouses(1, 10, 'dail');
 */
export const fetchHouses = async (
  page: number,
  limit: number,
  houseType?: HouseType
): Promise<HousesApiResponse> => {
  try {
    const skip = (page - 1) * limit;

    // Direktno kreiraj query string sa nuqs parserima
    const queryParams = [
      `skip=${parseAsInteger.serialize(skip)}`,
      `limit=${parseAsInteger.serialize(limit)}`,
      ...(houseType ? [`chamber=${encodeURIComponent(houseType)}`] : []),
    ].join('&');

    const url = `${import.meta.env.VITE_API_BASE_URL}/houses?${queryParams}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: HousesApiResponse = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while fetching houses');
  }
};
