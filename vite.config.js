import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Ensure the base URL is correct, especially if your app is in a sub-directory
  plugins: [react()],
});