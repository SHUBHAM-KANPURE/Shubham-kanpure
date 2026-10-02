import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      // React rarely changes: keep it in its own long-cached chunk so app updates don't re-download it
      output: { manualChunks: { react: ['react', 'react-dom'] } },
    },
  },
})
