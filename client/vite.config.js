import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  server: { hmr: true, port: 3000 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  test: {
    css: false,
    include: ['src/**/__tests__/*'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    clearMocks: true,
  },
});
