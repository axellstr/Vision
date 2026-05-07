import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://parisajewellery.com',
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Optimized image formats and quality for performance
    format: ['webp', 'avif'],
    domains: [],
    remotePatterns: []
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
    },
    // Optimize build performance
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro:assets']
          }
        }
      }
    }
  }
});