import { CssBaseline, ThemeProvider } from '@mui/material';

import React from 'react';
import theme from './theme';

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
