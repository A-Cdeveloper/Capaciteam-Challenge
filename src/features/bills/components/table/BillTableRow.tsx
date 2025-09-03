import { Chip, TableCell, TableRow } from '@mui/material';

import type { Bill } from '@/types';
import { BILLS_TABLE_COLUMNS } from '@/features/bills/constants/tableColumns';
import BillSponsors from './BillSponsors';

// create cell renderers for the bill table
const createCellRenderers = (bill: Bill) => ({
  billNo: () => bill.billNo,
  billType: () => bill.billType,
  status: () => (
    <Chip
      label={bill.status}
      color={bill.status === 'Enacted' ? 'success' : 'default'}
      size="small"
    />
  ),
  sponsors: () => <BillSponsors sponsors={bill.sponsors} />,
  actions: () => '#Favorites',
});

const BillTableRow = ({ bill }: { bill: Bill }) => {
  const cellRenderers = createCellRenderers(bill);

  return (
    <TableRow hover>
      {BILLS_TABLE_COLUMNS.map((column) => (
        <TableCell key={column.key} sx={{ width: column.width }}>
          {cellRenderers[column.key]?.() || 'N/A'}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default BillTableRow;
