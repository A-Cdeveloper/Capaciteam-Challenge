import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';

import type { Bill } from '@/types';
import { BILLS_TABLE_COLUMNS } from '@/features/bills/constants/tableColumns';
import BillSponsors from './BillSponsors';
import BillStatusChip from './BillStatus';
import FavoriteButton from './FavoriteButton';
import { Modal } from '@/components/ui/modal';
import BillContent from './BillContent';
// import { BillModal } from '../modal';

const TABS = [
  { label: 'English', value: '0' },
  { label: 'Gaeilge', value: '1' },
] as { label: string; value: string }[];

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

      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} data={bill} tabs={TABS}>
          <Modal.Header>
            <Typography variant="h5" component="div">
              Bill Details - {bill.billNo}
            </Typography>
            <Modal.Close />
          </Modal.Header>
          <Modal.Tabs />
          <Modal.Content>
            {({ data, activeTab }) => <BillContent bill={data as Bill} activeTab={activeTab} />}
          </Modal.Content>
        </Modal>
      )}
    </>
  );
});

export default BillTableRow;
