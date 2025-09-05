import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useMemo, memo } from 'react';

import { useFavoritesStore } from '@/features/bills/stores/favoritesStore';
import { useQueryState } from 'nuqs';
import { BillsTableBody, BillsTableHeader } from './table';
import BillsContainer from './BillsContainer';

/**
 * Component for displaying favorite bills with filtering
 * Retrieves bills from favorites store and displays them in a table
 * @returns JSX element containing favorite bills table
 */
const FavoritesBills = memo(() => {
  const { favorites } = useFavoritesStore();
  const [billStatus] = useQueryState('bill_status');

  // Filter favorites by status
  const { filteredBills } = useMemo(() => {
    const favoritesArray = Object.values(favorites);
    const filteredFavorites =
      billStatus === 'All' || !billStatus
        ? favoritesArray
        : favoritesArray.filter((bill) => bill.status === billStatus);

    return {
      filteredBills: filteredFavorites,
    };
  }, [favorites, billStatus]);

  const countText = `<span style={{ fontWeight: 500 }}>${filteredBills.length}</span> favorite bills`;

  return (
    <BillsContainer countText={countText}>
      <TableContainer>
        <Table size="medium">
          <BillsTableHeader />
          <BillsTableBody bills={filteredBills} activeTab="favorites" />
        </Table>
      </TableContainer>
    </BillsContainer>
  );
});

export default FavoritesBills;
