import { defineConfig } from '@farmfe/core';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  server: {
    hmr: process.env.NODE_ENV === 'development' // Habilitar HMR solo en desarrollo
  }
});
