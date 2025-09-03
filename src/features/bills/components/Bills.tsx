import { Box, Paper, Table, TableContainer } from '@mui/material';

import { EmptyState, ErrorMessage, Loading } from '@/components/ui';
import { PAGE_SIZE } from '@/config/constants';
import { useBills } from '@/features/bills/hooks/useBills';
import { usePagination } from '@/features/bills/hooks/usePagination';
import { BillsTableHeader, BillsTableBody, BillTablePagination } from './table';

const Bills = () => {
  const { page, skip, handleChangePage } = usePagination({ pageSize: PAGE_SIZE });
  const { data, error, isLoading, refetch } = useBills(PAGE_SIZE, skip);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} title="Failed to load bills" />;
  if (data?.results.length === 0)
    return (
      <EmptyState title="No bills found" message="There are no bills to display at this time." />
    );

  return (
    <Box>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }}>
          <BillsTableHeader />
          <BillsTableBody bills={data?.results || []} />
        </Table>
      </TableContainer>

      {(data?.head.counts.billCount || 0) > PAGE_SIZE && (
        <BillTablePagination
          count={data?.head.counts.billCount || 0}
          page={page}
          onPageChange={handleChangePage}
          pageSize={PAGE_SIZE}
        />
      )}
    </Box>
  );
};

export default Bills;
