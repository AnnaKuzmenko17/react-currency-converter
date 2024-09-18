import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/react-currency-converter/',
  server: {
    open: true,
    port: 3000,
  },
});
