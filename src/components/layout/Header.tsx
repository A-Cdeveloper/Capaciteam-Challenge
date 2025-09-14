import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h1" color="primary.main">
          Capaciteam
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;
