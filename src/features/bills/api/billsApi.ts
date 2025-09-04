import type { ApiBill, ApiErrorResponse, ApiSuccessResponse, BillStatus } from '@/types';

export const fetchBills = async (
  page: number,
  limit: number,
  billStatus?: BillStatus
): Promise<ApiSuccessResponse<ApiBill>> => {
  try {
    const skip = (page - 1) * limit;
    const params = new URLSearchParams();

    params.set('skip', skip.toString());
    params.set('limit', limit.toString());

    if (billStatus) {
      params.set('bill_status', billStatus);
    }

    const url = `${import.meta.env.VITE_API_BASE_URL}/legislation?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: ApiSuccessResponse<ApiBill> = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while fetching bills');
  }
};
