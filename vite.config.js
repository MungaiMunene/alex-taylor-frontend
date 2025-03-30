import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React app
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure that the output directory is set to "dist" (default), but you can customize if needed
    outDir: 'dist',  // Make sure the build outputs to the 'dist' folder
    target: 'esnext',  // Ensures the code is optimized for modern browsers
  },
  base: '/',  // The base URL is essential for single-page applications (SPA)
  server: {
    port: 3000,  // Port to run the dev server on (if needed)
  },
  // Optional: If you have any public assets like images, make sure they are handled correctly
  publicDir: 'public',  // Ensure assets in the public directory are served properly
});