export const PARTIES_TABLE_COLUMNS = [
  { key: 'showAs', label: 'Party Name', width: '90%' },
  { key: 'uri', label: 'Link', width: '10%' },
] as const;

export type PartiesTableColumn = (typeof PARTIES_TABLE_COLUMNS)[number];
