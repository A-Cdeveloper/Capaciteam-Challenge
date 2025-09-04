import { TableCell, TableRow } from '@mui/material';
import { memo } from 'react';

import type { Bill } from '@/types';
import { BILLS_TABLE_COLUMNS } from '@/features/bills/constants/tableColumns';
import BillSponsors from './BillSponsors';
import BillStatusChip from './BillStatus';
import FavoriteButton from './FavoriteButton';

// create cell renderers for the bill table
const createCellRenderers = (bill: Bill) => ({
  billNo: () => bill.billNo,
  billType: () => bill.billType,
  status: () => <BillStatusChip status={bill.status} />,
  sponsors: () => <BillSponsors sponsors={bill.sponsors} />,
  actions: () => <FavoriteButton billNo={bill.billNo} billYear={bill.billYear} />,
});

type BillTableRowProps = {
  bill: Bill;
};

const BillTableRow = memo(({ bill }: BillTableRowProps) => {
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
});

export default BillTableRow;
