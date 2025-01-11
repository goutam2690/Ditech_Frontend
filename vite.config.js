import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: true,  // Use the PORT environment variable, or default to 3000
  },
  define: {
    global: "window", // Ensure "global" is polyfilled for browser environments
  },
})
