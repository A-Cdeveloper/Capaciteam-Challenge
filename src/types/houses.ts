export const HOUSE_TYPE = {
  DAIL: 'dail',
  SEANAD: 'seanad',
  DAIL_AND_SEANAD: 'dail & seanad',
} as const;

export type HouseType = (typeof HOUSE_TYPE)[keyof typeof HOUSE_TYPE];

export type House = {
  houseCode: string;
  houseType: string;
  showAs: string;
  seats: number;
  dateRange: {
    start: string;
    end: string | null;
  };
  chamberCode: string;
  chamberType: string;
  houseNo: string;
  uri: string;
};

export type HouseResult = {
  house: House;
};

import type { ApiSuccessResponse } from './api';

export type HousesApiResponse = ApiSuccessResponse<
  HouseResult,
  { housesCount: number; resultCount: number }
>;
