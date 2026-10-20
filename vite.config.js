import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        alex: resolve(import.meta.dirname, 'mentors/alex-cross.html'),
        jibin: resolve(import.meta.dirname, 'mentors/jibin-jeffrey.html'),
        baber: resolve(import.meta.dirname, 'mentors/baber-bhatti.html')
      }
    }
  }
});
