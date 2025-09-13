import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo } from 'react';

type AppTableHeaderProps<T> = {
  columns: Array<{
    key: keyof T | string;
    label: string;
    width?: string;
  }>;
};

const AppTableHeader = <T,>({ columns }: AppTableHeaderProps<T>) => (
  <TableHead>
    <TableRow>
      {columns.map((column) => (
        <TableCell key={String(column.key)} scope="column" sx={{ width: column.width }}>
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default memo(AppTableHeader) as typeof AppTableHeader;
