import { EmptyState } from '@/components/ui';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { memo, type ReactNode } from 'react';

type AppTableBodyProps<T> = {
  data: T[];
  columns: Array<{
    key: keyof T | string;
    label: string;
    width?: string;
  }>;
  renderRow: (item: T) => ReactNode;
  emptyState?: {
    title: string;
    message: string;
  };
};

const AppTableBody = <T,>({ data, columns, renderRow, emptyState }: AppTableBodyProps<T>) => {
  if (data.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} sx={{ border: 'none', py: 8 }}>
            <EmptyState
              title={emptyState?.title || 'No data found'}
              message={emptyState?.message || 'There are no items to display.'}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return <TableBody>{data.map((item) => renderRow(item))}</TableBody>;
};

export default memo(AppTableBody) as typeof AppTableBody;
