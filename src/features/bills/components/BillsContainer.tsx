import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type BillsContainerProps = {
  children: React.ReactNode;
  countText?: string;
};

/**
 * Shared container component for bills display with optional count text
 * Provides consistent styling and layout for bills tables
 * @param children - React nodes to render inside the container
 * @param countText - Optional text to display in the top-right corner
 * @returns JSX element containing styled container with children
 */
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
