import Chip from '@mui/material/Chip';
import { memo } from 'react';

import type { BillStatus } from '@/types';
import { BILL_STATUS } from '@/types';

type ChipColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

const STATUS_COLORS: Record<BillStatus, ChipColor> = {
  [BILL_STATUS.ENACTED]: 'success',
  [BILL_STATUS.CURRENT]: 'primary',
  [BILL_STATUS.WITHDRAWN]: 'warning',
  [BILL_STATUS.REJECTED]: 'error',
  [BILL_STATUS.DEFEATED]: 'error',
  [BILL_STATUS.LAPSED]: 'secondary',
};

type BillStatusChipProps = {
  status: BillStatus;
};

const BillStatusChip = memo(({ status }: BillStatusChipProps) => {
  const color = STATUS_COLORS[status];

  return (
    <Chip
      data-testid="bill-status"
      label={status.toLowerCase()}
      color={color}
      size="small"
      variant="filled"
      sx={{ fontSize: '13px' }}
    />
  );
});

export default BillStatusChip;
