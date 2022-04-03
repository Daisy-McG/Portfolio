import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babelMacrosPlugin from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: [/\.(stories|spec|test)\.(t|j)sx?$/, /__tests__/, /__stories__/],
      jsxRuntime: 'classic',
    }),
    babelMacrosPlugin(),
  ]
})
