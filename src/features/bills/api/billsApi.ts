import type { ApiErrorResponse, BillsApiResponse, BillStatus } from '@/types';
import { parseAsInteger, parseAsString } from 'nuqs';

/**
 * Fetches bills data from the Oireachtas API with pagination and filtering
 * @param page - Page number (1-based)
 * @param limit - Number of bills per page
 * @param billStatus - Optional bill status filter (Current, Enacted, Withdrawn, etc.)
 * @returns Promise resolving to API response with bills data
 * @throws {Error} When API request fails or returns error status
 * @example
 * const bills = await fetchBills(1, 10, 'Current');
 */
export const fetchBills = async (
  page: number,
  limit: number,
  billStatus?: BillStatus
): Promise<BillsApiResponse> => {
  try {
    const skip = (page - 1) * limit;

    // Direktno kreiraj query string sa nuqs parserima
    const queryParams = [
      `skip=${parseAsInteger.serialize(skip)}`,
      `limit=${parseAsInteger.serialize(limit)}`,
      ...(billStatus ? [`bill_status=${parseAsString.serialize(billStatus)}`] : []),
    ].join('&');

    const url = `${import.meta.env.VITE_API_BASE_URL}/legislation?${queryParams}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: BillsApiResponse = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while fetching bills');
  }
};
