import { useMemo, memo } from 'react';
import { useQueryState } from 'nuqs';

import { AppTable } from '@/components/ui/table';
import { useFavoritesStore } from '@/features/bills/stores/favoritesStore';
import { createBillTableColumns } from '@/features/bills/utils/tableColumns';
import BillsContainer from './BillsContainer';
import BillModal from './bill-data/BillModal';

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
      <AppTable
        data={filteredBills}
        columns={createBillTableColumns()}
        modalComponent={(bill, isOpen, onClose) => (
          <BillModal bill={bill} isOpen={isOpen} onClose={onClose} />
        )}
        size="medium"
        emptyState={{
          title: 'No favorites yet',
          message:
            "You haven't added any bills to your favorites yet. Click the heart icon on any bill to add it to your favorites.",
        }}
      />
    </BillsContainer>
  );
});

export default FavoritesBills;
