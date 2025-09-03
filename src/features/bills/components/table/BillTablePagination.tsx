import { TablePagination } from '@mui/material';

type BillTablePaginationProps = {
  count: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  pageSize: number;
};

const BillTablePagination = ({ count, page, onPageChange, pageSize }: BillTablePaginationProps) => {
  return (
    <TablePagination
      rowsPerPageOptions={[]}
      component="div"
      count={count}
      rowsPerPage={pageSize}
      page={page}
      onPageChange={onPageChange}
    />
  );
};

export default BillTablePagination;
