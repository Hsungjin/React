import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@shared': path.resolve(__dirname, './src/components/shared'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@models': path.resolve(__dirname, './src/models'),
      '@mock': path.resolve(__dirname, './src/mock'),
      '@remote': path.resolve(__dirname, './src/remote'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@stores': path.resolve(__dirname, './src/stores'),
    },
  },
})
