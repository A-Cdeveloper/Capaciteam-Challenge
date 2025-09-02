export type Bill = {
  billNo: string;
  billType: string;
  status?: string;
  sponsors?: Sponsor[];
  shortTitleEn?: string;
  shortTitleGa?: string;
  longTitleEn?: string;
  longTitleGa?: string;
};

export type Sponsor = {
  sponsor: {
    by: {
      showAs: string;
      isPrimary: boolean;
    };
    as: string;
  };
};

export type FavoriteBill = Bill & {
  isFavorite: boolean;
};
