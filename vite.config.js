import vue from '@vitejs/plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { resolve } from 'path'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: {
    '@': resolve(__dirname, 'src')
  },
  build: {
    rollupOptions: {
      transformAssetsUrls: {
        img: ['src', 'data-src']
      },
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false
        }),
        json()
      ]

    }
  }
}
