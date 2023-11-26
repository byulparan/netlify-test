import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://drive.google.com/',
        changeOrigin: true, 
        rewrite: path => path.replace(/^\/api/, ''), 
      },
    },
  },
})
