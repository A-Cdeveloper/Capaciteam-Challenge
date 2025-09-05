import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { memo } from 'react';
import { useQueryState, parseAsInteger } from 'nuqs';
import type { BillStatus } from '@/types';
import { BILL_STATUS } from '@/types';

const ALL_STATUS = 'All';

const BillStatusFilter = memo(() => {
  const [billStatus, setBillStatus] = useQueryState('bill_status');
  const [, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const displayValue = (billStatus || 'All') as BillStatus | 'All';

  const handleStatusChange = (newStatus: BillStatus | 'All') => {
    if (newStatus === 'All') {
      // Remove bill_status from URL completely when "All" is selected
      setBillStatus(null);
    } else {
      setBillStatus(newStatus);
    }
    // Reset to page 1 when changing status
    setPage(1);
  };

  const handleChange = (event: SelectChangeEvent) => {
    handleStatusChange(event.target.value as BillStatus | typeof ALL_STATUS);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 150 }}>
      <InputLabel id="bill-status-filter-label">Bill Status</InputLabel>
      <Select
        labelId="bill-status-filter-label"
        value={displayValue}
        label="Bill Status"
        onChange={handleChange}
      >
        <MenuItem value={ALL_STATUS}>All</MenuItem>
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
