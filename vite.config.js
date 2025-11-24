import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/doc/V1.html'),
        elements: resolve(__dirname, 'src/doc/elements.html'),
      },
    },
  },
});