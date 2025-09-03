import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  server: {
    host: 'localhost',
    port: 4321
  },
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  }
});