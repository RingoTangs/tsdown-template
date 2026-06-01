import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'tsdown'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isPublishBuild = process.env.BUILD_TARGET === 'publish'

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
  sourcemap: !isPublishBuild,
  minify: isPublishBuild,
})
