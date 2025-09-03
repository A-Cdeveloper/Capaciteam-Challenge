export const BILLS_TABLE_COLUMNS = [
  { key: 'billNo', label: '#', width: '10%' },
  { key: 'billType', label: 'Type', width: '15%' },
  { key: 'status', label: 'Status', width: '15%' },
  { key: 'sponsors', label: 'Sponsor', width: '45%' },
  { key: 'actions', label: '', width: '15%' },
] as const;

export type BillsTableColumn = (typeof BILLS_TABLE_COLUMNS)[number];
