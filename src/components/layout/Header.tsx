import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
        py: 1,
      })}
    >
      <Typography variant="h1" color="primary.main">
        Capaciteam
      </Typography>
    </Box>
  );
};

export default Header;
