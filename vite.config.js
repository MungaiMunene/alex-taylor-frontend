import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React app
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output is correct
    target: 'esnext', // Ensure it's modern JS
    rollupOptions: {
      output: {
        format: 'es',  // Make sure the format is 'es' for JavaScript modules
      },
    },
  },
  base: '/',  // Ensure proper routing for SPAs
  server: {
    port: 3000,
  },
});