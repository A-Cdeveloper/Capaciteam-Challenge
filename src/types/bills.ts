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

export const BILL_STATUS = {
  CURRENT: 'Current',
  WITHDRAWN: 'Withdrawn',
  ENACTED: 'Enacted',
  REJECTED: 'Rejected',
  DEFEATED: 'Defeated',
  LAPSED: 'Lapsed',
} as const;

export const BILL_TYPE = {
  PRIVATE: 'Private',
  PUBLIC: 'Public',
  CONSOLIDATION: 'Consolidation',
  OTHER: 'Other',
} as const;

export type BillStatus = (typeof BILL_STATUS)[keyof typeof BILL_STATUS];
export type BillType = (typeof BILL_TYPE)[keyof typeof BILL_TYPE];

export type Bill = {
  billNo: string;
  billYear: string;
  billType: BillType;
  status: BillStatus;
  sponsors: Sponsor[];
  shortTitleEn: string;
  shortTitleGa: string;
  longTitleEn?: string;
  longTitleGa?: string;
};

export type FavoriteBill = Bill & { isFavorite: boolean };

import type { ApiSuccessResponse } from './api';

export type ApiBill = {
  bill: Bill;
};

export type BillsApiResponse = ApiSuccessResponse<
  ApiBill,
  { billCount: number; resultCount: number }
>;
