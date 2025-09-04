import { EmptyState } from '@/components/ui';
import type { Bill } from '@/types';
import { TableBody, TableCell, TableRow } from '@mui/material';
import BillTableRow from './BillTableRow';

type BillsTableBodyProps = {
  bills: Bill[];
};

const BillsTableBody = ({ bills }: BillsTableBodyProps) => {
  if (bills.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={5} sx={{ border: 'none', py: 8 }}>
            <EmptyState title="No bills found" message="There are no bills to display." />
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
