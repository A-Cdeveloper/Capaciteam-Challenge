import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { memo } from 'react';
import type { BillStatus } from '@/types';
import { BILL_STATUS } from '@/types';

const ALL_STATUS = 'All';

type BillStatusFilterProps = {
  value: BillStatus | typeof ALL_STATUS;
  onChange: (value: BillStatus | typeof ALL_STATUS) => void;
};

const BillStatusFilter = memo(({ value, onChange }: BillStatusFilterProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as BillStatus | typeof ALL_STATUS);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 150 }}>
      <InputLabel id="bill-status-filter-label">Bill Status</InputLabel>
      <Select
        labelId="bill-status-filter-label"
        value={value}
        label="Bill Status"
        onChange={handleChange}
      >
        <MenuItem value={ALL_STATUS}>All Statuses</MenuItem>
        {Object.values(BILL_STATUS).map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default BillStatusFilter;
