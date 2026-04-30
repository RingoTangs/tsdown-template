# tsdown-template

<p align="center">
  <strong>A minimal TypeScript library template powered by tsdown.</strong>
</p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-22-5FA04E?logo=nodedotjs&logoColor=white">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white">
  <img alt="tsdown" src="https://img.shields.io/badge/tsdown-0.21-0F172A?logo=vite&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier&logoColor=1A2B34">
</p>

<p align="center">
  Build TypeScript libraries with dual ESM/CJS output, typed declarations, and a ready-to-use quality toolchain.
</p>

<p align="center">
  English | <a href="./README.zh-CN.md">简体中文</a>
</p>

## Requirements

- Node.js `>=18`
- pnpm `10`

## Commands

- `pnpm i` installs dependencies
- `pnpm build` creates a local development build with sourcemaps
- `pnpm build:publish` creates a minified publish build without sourcemaps
- `pnpm test:run` runs the Vitest suite once
- `pnpm check` runs lint, format check, typecheck, and tests

## Usage

1. Create a new repository from this template.
2. Update `package.json` metadata for your package.
3. Run `pnpm i`.
4. Use `pnpm build` during development.
5. Verify changes with `pnpm check`.

`prepublishOnly` runs `pnpm build:publish` automatically before publish.

## Output

The package publishes files from `dist/` only and exposes both ESM and CJS entry points.
