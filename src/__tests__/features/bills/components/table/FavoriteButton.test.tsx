import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import FavoriteButton from '@/features/bills/components/bill-data/FavoriteButton';
import type { Bill } from '@/types';
import { mockBillsApiResponse } from '@/__tests__/__mocks__/mock-bills-api-response';

// Mock Zustand store
const mockToggleFavorite = vi.fn();
const mockIsFavorite = vi.fn();

vi.mock('@/features/bills/stores/favoritesStore', () => ({
  useFavoritesStore: (selector: (state: unknown) => unknown) => {
    const state = {
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    };
    return selector(state);
  },
}));

describe('FavoriteButton', () => {
  const mockBill = mockBillsApiResponse.results[0].bill;

  beforeEach(() => {
    vi.clearAllMocks();
    // Default mock behavior
    mockIsFavorite.mockReturnValue(false);
  });

  // utilities
  const renderFavoriteButton = (bill: Bill) => {
    const user = userEvent.setup();
    render(<FavoriteButton bill={bill} />);
    return { user, button: screen.getByTestId('favorite-button') };
  };

  it('should render favorite button', () => {
    const { button } = renderFavoriteButton(mockBill);
    expect(button).toBeInTheDocument();
  });

  it('should call toggleFavorite when clicked', async () => {
    const { user, button } = renderFavoriteButton(mockBill);

    await user.click(button);

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockBill);
  });
});
