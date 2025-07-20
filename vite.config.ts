import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'BOKADIOS',
          description: 'Bokadios is a handcrafted lemonade brand based in Bangi, Malaysia — made with real lemons, premium sugar, and no shortcuts. Order online, pick up weekly in KL.',
          canonical: 'https://bokadios.com'
        },
      },
    })],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
