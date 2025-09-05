import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';
import theme from '@/providers/mui/theme';

type MuiProviderProps = {
  children: React.ReactNode;
};

export const MuiProvider = ({ children }: MuiProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
