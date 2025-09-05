import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { useMemo, memo } from 'react';

import { ErrorMessage, Loading } from '@/components/ui';
import { PAGE_SIZE } from '@/config/constants';
import { useBills } from '@/features/bills/hooks/useBills';
import { usePagination } from '@/features/bills/hooks/usePagination';
import type { BillStatus } from '@/types';
import { useQueryState } from 'nuqs';
import { BillsTableBody, BillsTableHeader } from './table';
import BillsContainer from './BillsContainer';

/**
 * Component for displaying all bills with pagination and filtering
 * Fetches bills from API and displays them in a table with pagination controls
 * @returns JSX element containing bills table and pagination
 */
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
    <BillsContainer countText={countText}>
      <TableContainer>
        <Table size="medium">
          <BillsTableHeader />
          <BillsTableBody bills={filteredBills} activeTab="all" />
        </Table>
      </TableContainer>

      {/* Pagination - only for all tab */}
      {allCount > pageSize && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100]}
          component="div"
          count={allCount}
          rowsPerPage={pageSize}
          page={page - 1}
          onPageChange={(event, newPage) => handleChangePage(event!, newPage + 1)}
          onRowsPerPageChange={handleChangePageSize}
          sx={{
            '& .MuiTablePagination-select': {
              fontSize: '0.875rem',
            },
            '& .MuiTablePagination-selectLabel': {
              fontSize: '0.875rem',
            },
            '& .MuiTablePagination-displayedRows': {
              fontSize: '0.875rem',
            },
          }}
        />
      )}
    </BillsContainer>
  );
});

export default AllBills;
