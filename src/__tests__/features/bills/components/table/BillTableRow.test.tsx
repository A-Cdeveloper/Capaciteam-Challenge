import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import BillTableRow from '@/features/bills/components/table/BillTableRow';
import type { Bill, Sponsor, BillStatus } from '@/types';
import { mockBillsApiResponse } from '@/__tests__/__mocks__/mock-bills-api-response';

// Mock components to isolate the component under test
vi.mock('@/features/bills/components/table/FavoriteButton', () => ({
  default: ({ bill }: { bill: Bill }) => (
    <button data-testid="favorite-button" onClick={(e) => e.stopPropagation()}>
      Favorite Button {bill.billNo}
    </button>
  ),
}));

vi.mock('@/features/bills/components/table/BillSponsors', () => ({
  default: ({ sponsors }: { sponsors: Sponsor[] }) => {
    const sponsor = sponsors[0];
    return <span data-testid="bill-sponsors">{sponsor.sponsor.by.showAs}</span>;
  },
}));

vi.mock('@/features/bills/components/table/BillStatus', () => ({
  default: ({ status }: { status: BillStatus }) => <span data-testid="bill-status">{status}</span>,
}));

vi.mock('@/features/bills/components/modal', () => ({
  BillModal: Object.assign(
    ({ children }: { children: React.ReactNode }) => <div data-testid="bill-modal">{children}</div>,
    {
      Header: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="bill-modal-header">{children}</div>
      ),
      Close: () => <button data-testid="bill-modal-close">Close</button>,
      Tabs: () => <div data-testid="bill-modal-tabs">Tabs</div>,
      Content: () => <div data-testid="bill-modal-content">Content</div>,
    }
  ),
}));

// utilities
const renderBillTableRow = (bill: Bill) => {
  const user = userEvent.setup();
  render(<BillTableRow bill={bill} />);

  return {
    user,
    tableRow: screen.getByRole('row'),
    favoriteButton: screen.getByTestId('favorite-button'),
    billSponsors: screen.getByTestId('bill-sponsors'),
    billStatus: screen.getByTestId('bill-status'),
    billNumber: screen.getByTestId('bill-number'),
    billType: screen.getByTestId('bill-type'),
  };
};

describe('BillTableRow', () => {
  const mockBill = mockBillsApiResponse.results[0].bill;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render table row with all components', () => {
    const { tableRow, favoriteButton, billSponsors, billStatus, billNumber, billType } =
      renderBillTableRow(mockBill);

    // table row renders
    expect(tableRow).toBeInTheDocument();

    // mock components render
    expect(billNumber).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(billSponsors).toBeInTheDocument();
    expect(billStatus).toBeInTheDocument();
    expect(billType).toBeInTheDocument();
  });

  it('should display correct bill data', () => {
    const { billNumber, billType, billStatus, billSponsors } = renderBillTableRow(mockBill);

    expect(billNumber).toHaveTextContent(/123/i);
    expect(billType).toHaveTextContent(/public/i);
    expect(billStatus).toHaveTextContent(/current/i);
    expect(billSponsors).toHaveTextContent(/minister for health/i);
  });

  it('should open modal when table row is clicked', async () => {
    const { user, tableRow } = renderBillTableRow(mockBill);

    // modal should not be visible initially
    expect(screen.queryByTestId('bill-modal')).not.toBeInTheDocument();

    // click on table row
    await user.click(tableRow);

    // modal should be visible after click
    expect(screen.getByTestId('bill-modal')).toBeInTheDocument();
  });

  it('should not open modal when favorite button is clicked', async () => {
    const { user, favoriteButton } = renderBillTableRow(mockBill);

    // modal should not be visible initially
    expect(screen.queryByTestId('bill-modal')).not.toBeInTheDocument();

    // click on favorite button
    await user.click(favoriteButton);

    // modal should still not be visible (stopPropagation)
    expect(screen.queryByTestId('bill-modal')).not.toBeInTheDocument();
  });
});
