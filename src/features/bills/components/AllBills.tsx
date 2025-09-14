import { useQueryState } from 'nuqs';
import { memo, useMemo } from 'react';

import { ErrorMessage, Loading, Pagination } from '@/components/ui';
import { AppTable, AppTableContainer } from '@/components/ui/table';
import { PAGE_SIZE } from '@/config/constants';
import { createBillTableColumns } from '@/features/bills/utils/tableColumns';
import { useBills } from '@/features/bills/hooks/useBills';
import { usePagination } from '@/hooks/usePagination';
import type { BillStatus } from '@/types';
import Box from '@mui/material/Box';
import BillModal from './bill-data/BillModal';

const AllBills = memo(() => {
  const { page, pageSize, handleChangePage, handleChangePageSize } = usePagination({
    pageSize: PAGE_SIZE,
  });

  // Get bill status from URL for API call
  const [billStatus] = useQueryState('bill_status');
  const { data, error, isLoading, refetch } = useBills(
    page,
    pageSize,
    billStatus === 'All' || !billStatus ? undefined : (billStatus as BillStatus)
  );

  // Filter bills and get total count for pagination
  const { filteredBills, allCount } = useMemo(() => {
    const allCount = data?.head.counts.billCount || 0;
    return {
      filteredBills: data?.results || [],
      allCount,
    };
  }, [data?.results, data?.head.counts.billCount]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} title="Failed to load bills" />;

  const countText = `Showing <span style={{ fontWeight: 500 }}>${filteredBills.length}</span> of <span style={{ fontWeight: 500 }}>${allCount}</span> bills`;

  return (
    <>
      <AppTableContainer countText={countText}>
        <AppTable
          data={filteredBills}
          columns={createBillTableColumns()}
          modalComponent={(bill, isOpen, onClose) => (
            <BillModal bill={bill} isOpen={isOpen} onClose={onClose} />
          )}
          size="medium"
          emptyState={{
            title: 'No bills found',
            message: 'There are no bills to display.',
          }}
        />
      </AppTableContainer>

      {/* Pagination - only for all tab */}
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

export default AllBills;
