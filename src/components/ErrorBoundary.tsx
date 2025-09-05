import { Component, type ErrorInfo, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import { ErrorOutline, Home } from '@mui/icons-material';

type Props = {
  children: ReactNode;
};

type ErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, ErrorState> {
  public state: ErrorState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
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
                Oops! Something went wrong
              </Typography>

              <Alert severity="error" sx={{ mb: 3 }}>
                An unexpected error has occurred. Please try refreshing the page.
              </Alert>

              <Button
                variant="contained"
                startIcon={<Home />}
                onClick={() => (window.location.href = '/')}
                size="large"
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                }}
              >
                Go Home
              </Button>
            </Paper>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
