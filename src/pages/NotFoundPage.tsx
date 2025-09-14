import { Home, SentimentDissatisfied } from '@mui/icons-material';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
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
          <SentimentDissatisfied
            sx={{
              fontSize: 64,
              color: 'error.main',
              mb: 2,
            }}
          />

          <Typography variant="h4" color="error" gutterBottom>
            Page not found :(
          </Typography>

          <Button
            variant="contained"
            startIcon={<Home />}
            onClick={() => navigate('/')}
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
};

export default NotFoundPage;
