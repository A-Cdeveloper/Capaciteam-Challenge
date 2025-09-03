import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';

import { ErrorMessage } from '@/components/ui/ErrorMessage';
import Loading from '@/components/ui/Loading';
import { PAGE_SIZE } from '@/config/constants';
import { useBills } from '@/features/bills/hooks/useBills';
import { useState } from 'react';

const BillsTable = () => {
  const [page, setPage] = useState(0);

  const skip = page * PAGE_SIZE;
  const { data, error, isLoading, refetch } = useBills(PAGE_SIZE, skip);

  const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} title="Failed to load bills" />;

  return (
    <Box>
      <Box sx={{ overflowX: 'auto' }}>
        <TableContainer component={Paper} sx={{ minWidth: 650 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#NUM</TableCell>
                <TableCell>Type</TableCell>
                <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Status</TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Sponsors</TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.results.map((bill, index) => (
                <TableRow key={`${bill.billNo}-${index}`} hover>
                  <TableCell>{bill.billNo}</TableCell>
                  <TableCell>{bill.billType}</TableCell>
                  <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                    {bill.status}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    {bill.sponsors?.length
                      ? bill.sponsors.map((s, i) => (
                          <Typography key={`${s.sponsor.by.showAs}-${i}`} variant="body2">
                            {s.sponsor.as.showAs}
                          </Typography>
                        ))
                      : 'N/A'}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    #favorites
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data?.head.counts.billCount || 0}
        rowsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default BillsTable;
