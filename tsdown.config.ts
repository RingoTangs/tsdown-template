import path from 'node:path'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'dist',
  tsconfig: './tsconfig.build.json',
  alias: {
    '@': path.resolve(import.meta.dirname, './src'),
  },
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  target: 'es2020',
})
