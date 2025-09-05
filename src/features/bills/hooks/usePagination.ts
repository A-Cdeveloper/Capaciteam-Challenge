import { useQueryState, parseAsInteger } from 'nuqs';

type UsePaginationProps = {
  pageSize: number;
};

type UsePaginationResponse = {
  page: number;
  pageSize: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangePageSize: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPage: (page: number) => void;
};

/**
 * Custom hook for managing pagination state with URL synchronization
 * @param pageSize - Initial page size (number of items per page)
 * @returns Pagination state and handlers for page changes
 * @example
 * const { page, pageSize, handleChangePage } = usePagination({ pageSize: 10 });
 */
export const usePagination = ({
  pageSize: initialPageSize,
}: UsePaginationProps): UsePaginationResponse => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const [pageSize, setPageSize] = useQueryState(
    'limit',
    parseAsInteger.withDefault(initialPageSize)
  );

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    setPage(1); // Reset to first page when changing page size
  };

  return {
    page,
    pageSize,
    handleChangePage,
    handleChangePageSize,
    setPage,
  };
};
