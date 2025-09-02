export type ApiSuccessResponse<T> = {
  head: {
    counts: {
      billCount: number;
      resultCount: number;
    };
  };
  results: T[];
};

export type ApiErrorResponse = {
  message: string;
};
