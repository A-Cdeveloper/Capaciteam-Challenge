import type { Bill } from '@/types';
import BillStatusChip from '../components/bill-data/BillStatus';
import BillSponsors from '../components/bill-data/BillSponsors';
import FavoriteButton from '../components/bill-data/FavoriteButton';
import { BILLS_TABLE_COLUMNS } from '../constants/columns';

// create cell renderers for the bill table
const createCellRenderers = (bill: Bill) => ({
  billNo: () => <span data-testid="bill-number">{bill.billNo}</span>,
  billType: () => <span data-testid="bill-type">{bill.billType}</span>,
  status: () => <BillStatusChip status={bill.status} />,
  sponsors: () => <BillSponsors sponsors={bill.sponsors} />,
  actions: () => <FavoriteButton bill={bill} />,
});

export const createBillTableColumns = () =>
  BILLS_TABLE_COLUMNS.map((column) => ({
    ...column,
    render: (bill: Bill) => createCellRenderers(bill)[column.key]?.() || 'N/A',
  }));
