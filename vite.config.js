import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    lib: {
      formats: ['umd'],
      name: 'bangumi-script',
      fileName: () => 'index.js',
      entry: resolve(__dirname, 'src/main.js'),
    },
  }
})

