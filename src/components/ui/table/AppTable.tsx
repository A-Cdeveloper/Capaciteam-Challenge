import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { memo, type ReactNode } from 'react';
import AppTableBody from './AppTableBody';
import AppTableHeader from './AppTableHeader';
import AppTableRow from './AppTableRow';

type AppTableProps<T> = {
  data: T[];
  columns: Array<{
    key: keyof T | string;
    label: string;
    width?: string;
    render?: (item: T) => ReactNode;
  }>;
  modalComponent?: (item: T, isOpen: boolean, onClose: () => void) => ReactNode;
  emptyState?: {
    title: string;
    message: string;
  };
  size?: 'small' | 'medium';
};

const AppTable = <T,>({
  data,
  columns,
  modalComponent,
  emptyState,
  size = 'medium',
}: AppTableProps<T>) => {
  const renderRow = (item: T) => (
    <AppTableRow
      key={item[columns[0].key as keyof T] as string}
      item={item}
      columns={columns}
      modalComponent={modalComponent}
      hover={true}
    />
  );

  return (
    <TableContainer>
      <Table size={size}>
        <AppTableHeader columns={columns} />
        <AppTableBody data={data} columns={columns} renderRow={renderRow} emptyState={emptyState} />
      </Table>
    </TableContainer>
  );
};

export default memo(AppTable) as typeof AppTable;
