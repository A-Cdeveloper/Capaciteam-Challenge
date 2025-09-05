import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
        py: 2,
      })}
    >
      <Typography variant="h1" color="primary.main">
        Capaciteam
      </Typography>
    </Box>
  );
};

export default Header;
