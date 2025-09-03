import { TableCell, TableHead, TableRow } from '@mui/material';
import { BILLS_TABLE_COLUMNS } from '@/features/bills/constants/tableColumns';

const BillsTableHeader = () => (
  <TableHead>
    <TableRow>
      {BILLS_TABLE_COLUMNS.map((column) => (
        <TableCell key={column.label} scope="column" sx={{ width: column.width }}>
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default BillsTableHeader;
