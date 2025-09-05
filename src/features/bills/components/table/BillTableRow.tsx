import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import { createPortal } from 'react-dom';

import type { Bill } from '@/types';
import { BILLS_TABLE_COLUMNS } from '@/features/bills/constants/tableColumns';
import BillSponsors from './BillSponsors';
import BillStatusChip from './BillStatus';
import FavoriteButton from './FavoriteButton';
import { BillModal } from '../modal';

// create cell renderers for the bill table
const createCellRenderers = (bill: Bill) => ({
  billNo: () => <span data-testid="bill-number">{bill.billNo}</span>,
  billType: () => <span data-testid="bill-type">{bill.billType}</span>,
  status: () => <BillStatusChip status={bill.status} />,
  sponsors: () => <BillSponsors sponsors={bill.sponsors} />,
  actions: () => <FavoriteButton bill={bill} />,
});

type BillTableRowProps = {
  bill: Bill;
};

const BillTableRow = memo(({ bill }: BillTableRowProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const cellRenderers = createCellRenderers(bill);

  return (
    <>
      <TableRow hover onClick={() => setModalOpen(true)} sx={{ cursor: 'pointer' }}>
        {BILLS_TABLE_COLUMNS.map((column) => (
          <TableCell key={column.key} sx={{ width: column.width }}>
            {cellRenderers[column.key]?.() || 'N/A'}
          </TableCell>
        ))}
      </TableRow>

      {modalOpen &&
        createPortal(
          <BillModal open={modalOpen} onClose={() => setModalOpen(false)} bill={bill}>
            <BillModal.Header>
              <Typography variant="h5" component="div">
                Bill Details - {bill.billNo}
              </Typography>
              <BillModal.Close />
            </BillModal.Header>
            <BillModal.Tabs />
            <BillModal.Content />
          </BillModal>,
          document.body
        )}
    </>
  );
});

export default BillTableRow;
