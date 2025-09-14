export type ApiSuccessResponse<T, TCounts> = {
  head: {
    counts: TCounts;
  };
  results: T[];
};

export type ApiErrorResponse = {
  message: string;
};
