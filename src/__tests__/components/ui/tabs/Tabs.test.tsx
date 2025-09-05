import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Tabs from '@/components/ui/tabs/Tabs';
import type { TabItem } from '@/components/ui/tabs/Tabs';

describe('Tabs', () => {
  const mockTabs: TabItem[] = [
    { label: 'All Bills', value: 'all' },
    { label: 'Favorites', value: 'favorites' },
  ];

  const mockOnChange = vi.fn();

  // utilities
  const renderTabs = (value: string | number, tabs: TabItem[] = mockTabs) => {
    const user = userEvent.setup();
    render(<Tabs value={value} onChange={mockOnChange} tabs={tabs} />);
    return { user };
  };

  it('should render tabs with correct labels', () => {
    renderTabs('all');

    expect(screen.getByRole('tab', { name: /all bills/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /favorites/i })).toBeInTheDocument();
  });

  it('should call onChange when tab is clicked', async () => {
    const { user } = renderTabs('all');

    const favoritesTab = screen.getByRole('tab', { name: /favorites/i });
    await user.click(favoritesTab);

    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object), 'favorites');
  });
});
