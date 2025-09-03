import { Box, Container, Paper, Typography } from '@mui/material';
import { InboxOutlined } from '@mui/icons-material';

type EmptyStateProps = {
  title?: string;
  message?: string;
};

export const EmptyState = ({
  title = 'No data found',
  message = 'There are no items to display at this time.',
}: EmptyStateProps) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 2,
            maxWidth: 500,
            width: '100%',
          }}
        >
          <InboxOutlined
            sx={{
              fontSize: 64,
              color: 'text.secondary',
              mb: 2,
            }}
          />
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};
