export type Party = {
  partyCode: string;
  uri: string;
  showAs: string;
};

export type House = {
  showAs: string;
  uri: string;
  houseCode: string;
  houseNo: number;
};

export type PartyResult = {
  party: Party;
  house: House;
};

import type { ApiSuccessResponse } from './api';

export type PartiesApiResponse = ApiSuccessResponse<
  PartyResult,
  { partyCount: number; resultCount: number }
>;
