import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BillSponsors from '@/features/bills/components/bill-data/BillSponsors';
import type { Sponsor } from '@/types';
import { mockBillsApiResponse } from '@/__tests__/__mocks__/mock-bills-api-response';

describe('BillSponsors', () => {
  const mockSponsors = mockBillsApiResponse.results[0].bill.sponsors;

  // utilities
  const renderBillSponsors = (sponsors: Sponsor[]) => {
    render(<BillSponsors sponsors={sponsors} />);
    return screen.getByTestId('bill-sponsors');
  };

  it('should display N/A when no sponsors provided', () => {
    const element = renderBillSponsors([]);
    expect(element).toHaveTextContent(/n\/a/i);
  });

  it('should display sponsor with both names when available', () => {
    const element = renderBillSponsors(mockSponsors);
    expect(element).toHaveTextContent(/minister for health \(government\)/i);
  });

  it('should display primary sponsor when multiple sponsors available', () => {
    const multipleSponsors: Sponsor[] = [
      {
        sponsor: {
          by: { showAs: 'John Doe' },
          as: { showAs: 'Independent' },
          isPrimary: false,
        },
      },
      ...mockSponsors, // This has isPrimary: true
    ];

    const element = renderBillSponsors(multipleSponsors);
    expect(element).toHaveTextContent(/minister for health \(government\)/i);
  });
});
