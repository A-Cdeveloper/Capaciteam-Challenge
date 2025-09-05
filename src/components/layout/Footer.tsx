import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
        py: 1,
      })}
    >
      <Typography variant="body2">&copy; Capaciteam 2025</Typography>
    </Box>
  );
};

export default Footer;
