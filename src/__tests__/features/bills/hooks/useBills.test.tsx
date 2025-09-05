import { renderHook, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useBills } from '@/features/bills/hooks/useBills';
import { mockBillsApiResponse } from '@/__tests__/__mocks__/mock-bills-api-response';
import * as billsApi from '@/features/bills/api/billsApi';
import type { BillStatus } from '@/types';
import { QueryTestWrapper } from '@/__tests__/utils/QueryTestWrapper';

describe('useBills', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(billsApi, 'fetchBills').mockResolvedValue(mockBillsApiResponse);
  });

  // utilities
  const renderUseBills = (page: number, limit: number, billStatus?: BillStatus) => {
    return renderHook(() => useBills(page, limit, billStatus), {
      wrapper: QueryTestWrapper,
    });
  };

  const waitForLoadingToComplete = async (result: { current: { isLoading: boolean } }) => {
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  };

  it('should return loading state initially', () => {
    const { result } = renderUseBills(1, 10);

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it('should return bills data when successful', async () => {
    const { result } = renderUseBills(1, 10);

    await waitForLoadingToComplete(result);

    expect(result.current.data).toBeDefined();
    expect(result.current.data?.results).toHaveLength(2);
    expect(result.current.data?.results[0].billNo).toBe('123');
  });

  it('should handle API errors', async () => {
    vi.spyOn(billsApi, 'fetchBills').mockRejectedValue(new Error('API Error'));

    const { result } = renderUseBills(1, 10);

    await waitForLoadingToComplete(result);

    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();
  });

  it('should handle empty results', async () => {
    vi.spyOn(billsApi, 'fetchBills').mockResolvedValue({
      head: { counts: { billCount: 0, resultCount: 0 } },
      results: [],
    });

    const { result } = renderUseBills(1, 10);

    await waitForLoadingToComplete(result);

    expect(result.current.data?.results).toHaveLength(0);
    expect(result.current.data?.resultsLength).toBe(0);
  });
});
