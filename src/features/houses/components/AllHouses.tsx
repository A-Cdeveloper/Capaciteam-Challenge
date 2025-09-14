import { memo, useMemo } from 'react';

import { ErrorMessage, Loading, Pagination } from '@/components/ui';
import { AppTable } from '@/components/ui/table';
import { PAGE_SIZE } from '@/config/constants';
import { useHouses } from '@/features/houses/hooks/useHouses';
import { usePagination } from '@/hooks/usePagination';
import type { House, HouseType } from '@/types';
import Box from '@mui/material/Box';
import { createHousesTableColumns } from '../utils/tableColumns';
import HousesContainer from './HousesContainer';
import { useQueryState } from 'nuqs';

const AllHouses = memo(() => {
  const { page, pageSize, handleChangePage, handleChangePageSize } = usePagination({
    pageSize: PAGE_SIZE,
  });

  const [houseType] = useQueryState('chamber');

  const { data, error, isLoading, refetch } = useHouses(
    page,
    pageSize,
    houseType === 'All' || !houseType ? undefined : (houseType as HouseType)
  );

  // Get total count for pagination
  const allCount = data?.head?.counts?.housesCount || 0;

  const countText = useMemo(() => {
    if (isLoading) return 'Loading...';
    if (error) return 'Error loading houses';
    return `Showing ${data?.resultsLength || 0} of ${allCount} houses`;
  }, [isLoading, error, data?.resultsLength, allCount]);

  if (isLoading) return <Loading />;
  if (error) {
    return <ErrorMessage error={error} onRetry={refetch} title="Failed to load houses" />;
  }

  return (
    <>
      <HousesContainer countText={countText}>
        <AppTable<House>
          data={data?.results || []}
          columns={createHousesTableColumns()}
          size="medium"
          emptyState={{
            title: 'No houses found',
            message: 'There are no houses to display.',
          }}
        />
      </HousesContainer>

      {/* Pagination */}
      {allCount > pageSize && (
        <Box sx={{ marginY: 2 }}>
          <Pagination
            count={allCount}
            page={page - 1}
            onPageChange={(event, newPage) =>
              handleChangePage(event as React.SyntheticEvent, newPage + 1)
            }
            rowsPerPage={pageSize}
            onRowsPerPageChange={handleChangePageSize}
            rowsPerPageOptions={[10, 20, 50, 100]}
          />
        </Box>
      )}
    </>
  );
});

AllHouses.displayName = 'AllHouses';

export default AllHouses;
