import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'tsdown'
import pkg from './package.json' with { type: 'json' }

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  entry: './src/index.ts',
  outDir: 'dist',
  tsconfig: './tsconfig.build.json',
  alias: {
    '@': path.resolve(import.meta.dirname, './src'),
  },
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  banner: `/*! ${pkg.name} v${pkg.version} */`,
  minify: isProd,
  platform: 'node',
  // 仅在生产构建时进行 npm 包校验
  publint: isProd,
  attw: {
    enabled: isProd,
    profile: 'node16',
    level: 'error',
  },
})
