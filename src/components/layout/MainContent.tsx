import { Container } from '@mui/material';

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ flex: 1, p: 2 }}>
      {children}
    </Container>
  );
};

export default MainContent;
