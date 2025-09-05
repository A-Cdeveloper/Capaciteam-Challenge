import { Box, Paper, Typography } from '@mui/material';
import { memo } from 'react';

type BillsContainerProps = {
  children: React.ReactNode;
  countText?: string;
};

const BillsContainer = memo(({ children, countText }: BillsContainerProps) => {
  return (
    <Box sx={{ position: 'relative' }}>
      {countText && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            position: 'absolute',
            top: -32,
            right: 0,
          }}
          dangerouslySetInnerHTML={{ __html: countText }}
        />
      )}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
        }}
      >
        {children}
      </Paper>
    </Box>
  );
});

export default BillsContainer;
