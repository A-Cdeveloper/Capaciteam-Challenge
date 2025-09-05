import { EmptyState } from '@/components/ui';
import type { Bill } from '@/types';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import BillTableRow from './BillTableRow';

type BillsTableBodyProps = {
  bills: Bill[];
  activeTab?: 'all' | 'favorites';
};

const BillsTableBody = ({ bills, activeTab = 'all' }: BillsTableBodyProps) => {
  if (bills.length === 0) {
    const isFavoritesTab = activeTab === 'favorites';
    const title = isFavoritesTab ? 'No favorites yet' : 'No bills found';
    const message = isFavoritesTab
      ? "You haven't added any bills to your favorites yet. Click the heart icon on any bill to add it to your favorites."
      : 'There are no bills to display.';

    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={5} sx={{ border: 'none', py: 8 }}>
            <EmptyState title={title} message={message} />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {bills.map((bill) => (
        <BillTableRow key={`${bill.billNo}-${bill.billYear}`} bill={bill} />
      ))}
    </TableBody>
  );
};

export default BillsTableBody;
