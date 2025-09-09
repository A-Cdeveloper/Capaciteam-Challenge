import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { FilterList } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        px: 1,
        py: 1,
        borderRadius: 1,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        minWidth: 200,
      }}
    >
      <FilterList sx={{ color: 'text.secondary', fontSize: 18 }} />
      <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
        Filter by Status
      </Typography>
      <FormControl size="small" sx={{ width: 120, ml: 1 }}>
        <Select
          value={displayValue}
          onChange={handleChange}
          displayEmpty
          variant="outlined"
          sx={{
            '& .MuiSelect-select': {
              py: 0.5,
              fontSize: '0.9rem',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
                boxShadow: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
              },
            },
            '& .MuiMenuItem-root': {
              fontSize: '0.9rem !important',
            },
          }}
        >
          <MenuItem value={ALL_STATUS}>All</MenuItem>
          {Object.values(BILL_STATUS).map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
});

export default BillStatusFilter;
