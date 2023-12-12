import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './setupTest.js'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.API_ROUTE,
        changeOrigin: true,
        secure: false
      }
    }
  }
})
