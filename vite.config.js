import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: '/index.dev.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.dev.html',
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/app-chunk.js',
        assetFileNames: 'assets/[name][extname]',
      }
    }
  }
});
