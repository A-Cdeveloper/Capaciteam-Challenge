export const HOUSES_TABLE_COLUMNS = [
  { key: 'showAs', label: 'House Name', width: '40%' },
  { key: 'houseType', label: 'Type', width: '20%' },
  { key: 'seats', label: 'Seats', width: '10%' },
  { key: 'houseNo', label: 'Number', width: '10%' },
  { key: 'uri', label: 'Link', width: '20%' },
] as const;

export type HousesTableColumn = (typeof HOUSES_TABLE_COLUMNS)[number];
