import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" alignItems="center" justifyContent="center" height="100%" gap={2}>
      <Typography variant="h1" color="secondary.main">
        Welcome to Capaciteam
      </Typography>
      <Box display="flex" gap={2} justifyContent="center">
        <Button variant="contained" color="info" onClick={() => navigate('/bills')} size="large">
          View Bills
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/parties')}
          size="large"
        >
          View Parties
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate('/houses')}
          size="large"
        >
          View Houses
        </Button>
      </Box>
    </Stack>
  );
};

export default HomePage;
