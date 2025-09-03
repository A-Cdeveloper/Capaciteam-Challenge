import { TableBody } from '@mui/material';
import type { Bill } from '@/types';
import BillTableRow from './BillTableRow';

type BillsTableBodyProps = {
  bills: Bill[];
};

const BillsTableBody = ({ bills }: BillsTableBodyProps) => {
  return (
    <TableBody>
      {bills.map((bill, index) => (
        // some data from api have the same billNo
        <BillTableRow key={bill.billNo + index} bill={bill} />
      ))}
    </TableBody>
  );
};

export default BillsTableBody;
