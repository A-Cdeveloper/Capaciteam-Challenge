import { Box, Button, Container, Paper, Typography } from '@mui/material';

import { ErrorOutline } from '@mui/icons-material';

type ErrorAlertProps = {
  error: Error | null;
  onRetry?: () => void;
  title?: string;
};

export const ErrorMessage = ({
  error,
  onRetry,
  title = 'Something went wrong',
}: ErrorAlertProps) => {
  if (!error) return null;

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
          <ErrorOutline
            sx={{
              fontSize: 64,
              color: 'error.main',
              mb: 2,
            }}
          />

          <Typography variant="h5" color="error" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{error.message}</Typography>

          <Button
            variant="contained"
            onClick={onRetry}
            size="large"
            sx={{
              mt: 2,
              px: 4,
              py: 1,
            }}
          >
            Retry
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};
