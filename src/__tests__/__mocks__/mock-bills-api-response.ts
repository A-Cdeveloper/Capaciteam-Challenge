import type { Bill } from '@/types';
import type { ApiSuccessResponse } from '@/types/api';

/**
 * Mock API response for testing bills functionality
 */
export const mockBillsApiResponse: ApiSuccessResponse<{ bill: Bill }> = {
  head: {
    counts: {
      billCount: 2,
      resultCount: 2,
    },
  },
  results: [
    {
      bill: {
        billNo: '123',
        billYear: '2024',
        billType: 'Public',
        status: 'Current',
        sponsors: [
          {
            sponsor: {
              by: { showAs: 'Minister for Health' },
              as: { showAs: 'Government' },
              isPrimary: true,
            },
          },
        ],
        shortTitleEn: 'Health Insurance Amendment Bill 2024',
        shortTitleGa: 'Bille Leasú Árachas Sláinte 2024',
        longTitleEn: 'A Bill to amend the Health Insurance Act 1994',
        longTitleGa: 'Bille chun an tAcht Árachas Sláinte 1994 a leasú',
      },
    },
    {
      bill: {
        billNo: '456',
        billYear: '2024',
        billType: 'Private',
        status: 'Enacted',
        sponsors: [
          {
            sponsor: {
              by: { showAs: "Deputy Sarah O'Connor" },
              as: { showAs: 'Independent' },
              isPrimary: true,
            },
          },
        ],
        shortTitleEn: 'Climate Action Bill 2024',
        shortTitleGa: 'Bille Gníomhaíochta Aeráide 2024',
        longTitleEn: 'A Bill to provide for climate action measures',
        longTitleGa: 'Bille chun bearta gníomhaíochta aeráide a fhoráil',
      },
    },
  ],
};
