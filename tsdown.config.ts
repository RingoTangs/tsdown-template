import path from 'node:path'
import { defineConfig } from 'tsdown'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'dist',
  tsconfig: './tsconfig.build.json',
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  clean: true,
  dts: true,
  cjsDefault: true,
  format: ['cjs', 'esm'],
  shims: true,
  target: 'es2015',
  sourcemap: true,
  platform: 'browser',
})
