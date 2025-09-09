import { TablePagination, IconButton, Box } from '@mui/material';
import { FirstPage, LastPage, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { getPageNumbers } from '@/utils/pagination';

// Common button styles for pagination controls
const BUTTON_SX = {
  minWidth: 28,
  height: 28,
  fontSize: '0.85rem',
  px: 0.5,
};

type PaginationProps = {
  count: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowsPerPageOptions?: number[];
};

export const Pagination = ({
  count,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 25, 50],
}: PaginationProps) => {
  const totalPages = Math.ceil(count / rowsPerPage);
  const currentPage = page + 1;

  const handleFirstPage = () => {
    onPageChange(null, 0);
  };

  const handleLastPage = () => {
    onPageChange(null, totalPages - 1);
  };

  const handlePreviousPage = () => {
    onPageChange(null, page - 1);
  };

  const handleNextPage = () => {
    onPageChange(null, page + 1);
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages, 5);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
        rowsPerPageOptions={rowsPerPageOptions}
        ActionsComponent={() => null} // remove default actions
        sx={{
          flexGrow: 1,
          '& .MuiTablePagination-selectLabel': {
            fontSize: '0.85rem',
          },
          '& .MuiTablePagination-select': {
            fontSize: '0.85rem',
          },
          '& .MuiTablePagination-displayedRows': {
            fontSize: '0.85rem',
          },
        }}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <IconButton
          onClick={handleFirstPage}
          disabled={page === 0}
          aria-label="first page"
          sx={BUTTON_SX}
        >
          <FirstPage fontSize="small" />
        </IconButton>

        <IconButton
          onClick={handlePreviousPage}
          disabled={page === 0}
          aria-label="previous page"
          sx={BUTTON_SX}
        >
          <KeyboardArrowLeft fontSize="small" />
        </IconButton>

        {/* Page Numbers */}
        <Box sx={{ display: 'flex', gap: 0, mx: 0 }}>
          {pageNumbers.map((pageNum, index) => (
            <IconButton
              key={index}
              onClick={() =>
                typeof pageNum === 'number' ? onPageChange(null, pageNum - 1) : undefined
              }
              disabled={pageNum === '...'}
              sx={{
                minWidth: pageNum === '...' ? 20 : 28,
                height: 28,
                fontSize: pageNum === '...' ? '0.7rem' : '0.85rem',
                borderRadius: '0px',
                backgroundColor: pageNum === currentPage ? 'divider' : 'transparent',
                color: pageNum === '...' ? 'text.secondary' : 'text.primary',
                '&:hover': {
                  backgroundColor: pageNum === currentPage ? 'divider' : 'divider',
                },
              }}
            >
              {pageNum}
            </IconButton>
          ))}
        </Box>

        <IconButton
          onClick={handleNextPage}
          disabled={page >= totalPages - 1}
          aria-label="next page"
          sx={BUTTON_SX}
        >
          <KeyboardArrowRight fontSize="small" />
        </IconButton>

        <IconButton
          onClick={handleLastPage}
          disabled={page >= totalPages - 1}
          aria-label="last page"
          sx={BUTTON_SX}
        >
          <LastPage fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};
