import { Box, Tabs as MuiTabs, Tab } from '@mui/material';
import { memo } from 'react';

export type TabItem = {
  label: string;
  value: number | string;
};

type TabsProps = {
  value: number | string;
  onChange: (event: React.SyntheticEvent, newValue: number | string) => void;
  tabs: TabItem[];
  ariaLabel?: string;
};

const Tabs = memo(({ value, onChange, tabs, ariaLabel = 'tabs' }: TabsProps) => {
  return (
    <Box sx={{ borderTop: 1, borderBottom: 1, borderColor: 'divider', px: 0 }}>
      <MuiTabs
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        variant="fullWidth"
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.95rem',
            minHeight: 48,
            flex: 1,
            padding: 0,
            '&.Mui-selected': {
              color: 'primary.main',
              fontWeight: 600,
            },
          },
          '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: '2px 2px 0 0',
            width: '100%',
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label.toUpperCase()} value={tab.value} />
        ))}
      </MuiTabs>
    </Box>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
