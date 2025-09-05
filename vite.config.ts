import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem
          'react-vendor': ['react', 'react-dom'],

          // Material UI
          'mui-vendor': ['@mui/material', '@mui/icons-material', '@mui/material/styles'],

          // State management and utilities
          'utils-vendor': ['zustand', 'nuqs', '@tanstack/react-query'],
        },
      },
    },
    // Optimize bundle size
    minify: 'esbuild',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
