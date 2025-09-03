import { CircularProgress, Container, Stack, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction="column" alignItems="center" justifyContent="center" height="50vh">
        <CircularProgress color="secondary" sx={{ mb: 2 }} />
        <Typography>Loading...</Typography>
      </Stack>
    </Container>
  );
};

export default Loading;
