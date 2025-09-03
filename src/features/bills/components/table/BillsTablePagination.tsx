import { TablePagination } from '@mui/material';
import React from 'react';

type PaginationProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (e: unknown, newPage: number) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BillsTablePagination = (props: PaginationProps) => (
  <TablePagination component="div" {...props} />
);

export default BillsTablePagination;
