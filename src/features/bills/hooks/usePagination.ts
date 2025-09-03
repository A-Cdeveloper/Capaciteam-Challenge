import { useState } from 'react';

type UsePaginationProps = {
  pageSize: number;
  initialPage?: number;
};

type UsePaginationResponse = {
  page: number;
  skip: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  setPage: (page: number) => void;
};

export const usePagination = ({
  pageSize,
  initialPage = 0,
}: UsePaginationProps): UsePaginationResponse => {
  const [page, setPage] = useState(initialPage);

  const skip = page * pageSize;

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return {
    page,
    skip,
    handleChangePage,
    setPage,
  };
};
