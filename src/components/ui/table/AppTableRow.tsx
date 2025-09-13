import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { memo, type ReactNode, useState } from 'react';

type AppTableRowProps<T> = {
  item: T;
  columns: Array<{
    key: keyof T | string;
    label: string;
    width?: string;
    render?: (item: T) => ReactNode;
  }>;
  modalComponent?: (item: T, isOpen: boolean, onClose: () => void) => ReactNode;
  hover?: boolean;
};

const AppTableRow = <T,>({ item, columns, modalComponent, hover = true }: AppTableRowProps<T>) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TableRow hover={hover} onClick={() => setModalOpen(true)} sx={{ cursor: 'pointer' }}>
        {columns.map((column) => (
          <TableCell key={String(column.key)} sx={{ width: column.width }}>
            {column.render ? column.render(item) : String(item[column.key as keyof T] || '')}
          </TableCell>
        ))}
      </TableRow>

      {modalOpen && modalComponent && modalComponent(item, modalOpen, () => setModalOpen(false))}
    </>
  );
};

export default memo(AppTableRow) as typeof AppTableRow;
