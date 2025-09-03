// src/theme.ts
import { alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
      light: '#6977c7',
      dark: '#2c387f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      light: '#fd337a',
      dark: '#af0340',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      light: '#ef5350',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    background: {
      default: '#F7F8FCFF',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0,0,0,0.7)',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontSize: '2.3rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  spacing: 10,
  breakpoints: {
    values: { xs: 0, sm: 376, md: 768, lg: 1024, xl: 1440 },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          padding: '8px 10px',
          fontWeight: 600,
          backgroundColor: alpha(theme.palette.divider, 0.1),
        }),
        body: {
          padding: '10px',
        },
      },
    },
  },
});

export default theme;
