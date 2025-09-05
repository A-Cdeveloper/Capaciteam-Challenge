import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Loading = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" alignItems="center" justifyContent="center" height="50vh">
        <CircularProgress color="secondary" sx={{ mb: 2 }} />
        <Typography>Loading...</Typography>
      </Stack>
    </Container>
  );
};
