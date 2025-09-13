import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { FilterList } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { memo } from 'react';

export type SelectFilterOption<T> = {
  label: string;
  value: T;
};

type SelectFilterProps<T> = {
  options: SelectFilterOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
  label: string;
  allOption?: boolean;
  allLabel?: string;
  width?: number;
  minWidth?: number;
};

const SelectFilter = <T,>({
  options,
  value,
  onChange,
  label,
  allOption = true,
  allLabel = 'All',
  width = 120,
  minWidth = 200,
}: SelectFilterProps<T>) => {
  const displayValue = value ? String(value) : allOption ? allLabel : '';

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;

    if (allOption && newValue === allLabel) {
      onChange(null);
    } else {
      onChange(newValue as T);
    }
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
        minWidth,
      }}
    >
      <FilterList sx={{ color: 'text.secondary', fontSize: 18 }} />
      <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
        {label}
      </Typography>
      <FormControl size="small" sx={{ width, ml: 1 }}>
        <Select<string>
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
          {allOption && <MenuItem value={allLabel}>{allLabel}</MenuItem>}
          {options.map((option) => (
            <MenuItem key={String(option.value)} value={option.value as string}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default memo(SelectFilter) as typeof SelectFilter;
