import type { ApiBill, ApiErrorResponse, ApiSuccessResponse } from '@/types';

export const fetchBills = async (
  limit: number,
  skip: number
): Promise<ApiSuccessResponse<ApiBill>> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/legislation/?limit=${limit}&skip=${skip}`
    );

    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: ApiSuccessResponse<ApiBill> = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching bills:', error);

    throw error;
  }
};
