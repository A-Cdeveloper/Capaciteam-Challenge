export type SponsorInfo = {
  showAs: string;
};

export type Sponsor = {
  sponsor: {
    by: SponsorInfo;
    as: SponsorInfo;
    isPrimary: boolean;
  };
};

export type BillStatus = 'Enacted' | 'Pending' | 'Draft';
export type BillType = 'Private' | 'Public' | 'Consolidation' | 'Other';

export type Bill = {
  billNo: string;
  billType: BillType;
  status: BillStatus;
  sponsors: Sponsor[];
  shortTitleEn: string;
  shortTitleGa: string;
  longTitleEn?: string;
  longTitleGa?: string;
};

export type FavoriteBill = Bill & { isFavorite: boolean };

export type ApiBill = {
  bill: Bill;
};
