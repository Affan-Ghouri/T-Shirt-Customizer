import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/T-Shirt-Customizer/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  assetsInclude: ['**/*.glb'],
})
