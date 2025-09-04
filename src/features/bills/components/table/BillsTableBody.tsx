import { TableBody } from '@mui/material';
import type { Bill } from '@/types';
import BillTableRow from './BillTableRow';

type BillsTableBodyProps = {
  bills: Bill[];
};

const BillsTableBody = ({ bills }: BillsTableBodyProps) => {
  return (
    <TableBody>
      {bills.map((bill) => (
        // use billNo + billYear as stable unique key
        <BillTableRow key={`${bill.billNo}-${bill.billYear}`} bill={bill} />
      ))}
    </TableBody>
  );
};

export default BillsTableBody;
