import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React app
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Ensure output is correct
    target: 'esnext', // Make sure it's modern JS
    rollupOptions: {
      output: {
        format: 'es',  // Ensure correct module format
      },
    },
  },
  base: '/',  // Ensure that routing works properly for SPAs
  server: {
    port: 3000,
  },
});