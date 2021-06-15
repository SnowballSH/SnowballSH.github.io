import { defineConfig } from 'vite'

import prefresh from '@prefresh/vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [prefresh()]
})
