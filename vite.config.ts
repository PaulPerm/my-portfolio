import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three')) return 'three'
          if (id.includes('@react-three')) return 'react-three'
          if (id.includes('framer-motion')) return 'framer'
          if (id.includes('react-icons')) return 'icons'
          if (id.includes('react-dom') || id.includes('react/')) return 'react'
        }
      }
    }
  }
})