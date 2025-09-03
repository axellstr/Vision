import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
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