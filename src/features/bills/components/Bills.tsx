import { Box, Paper, Table, TableContainer, TablePagination } from '@mui/material';

import { EmptyState, ErrorMessage, Loading } from '@/components/ui';
import { PAGE_SIZE } from '@/config/constants';
import type { BillStatus } from '@/types';
import { useBills } from '@/features/bills/hooks/useBills';
import { usePagination } from '@/features/bills/hooks/usePagination';
import { useBillStatusFilter } from '@/features/bills/hooks/useBillStatusFilter';
import { BillStatusFilter as BillStatusFilterComponent } from './filters';
import { BillsTableHeader, BillsTableBody } from './table';

const Bills = () => {
  const { page, pageSize, handleChangePage, handleChangePageSize } = usePagination({
    pageSize: PAGE_SIZE,
  });
  const { billStatus, displayValue, handleStatusChange } = useBillStatusFilter();
  const { data, error, isLoading, refetch } = useBills(
    page,
    pageSize,
    billStatus === 'All' ? undefined : (billStatus as BillStatus)
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} title="Failed to load bills" />;
  if (data?.resultsLength === 0)
    return (
      <EmptyState title="No bills found" message="There are no bills to display at this time." />
    );

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <BillStatusFilterComponent value={displayValue} onChange={handleStatusChange} />
      </Box>

      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
        }}
      >
        <TableContainer>
          <Table size="medium">
            <BillsTableHeader />
            <BillsTableBody bills={data?.results || []} />
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination */}
      {(data?.head.counts.billCount || 0) > pageSize && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100]}
          component="div"
          count={data?.head.counts.billCount || 0}
          rowsPerPage={pageSize}
          page={page - 1}
          onPageChange={(event, newPage) => handleChangePage(event, newPage + 1)}
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
    </Box>
  );
};

export default Bills;
