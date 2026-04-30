# tsdown-template

A minimal TypeScript library template powered by `tsdown`.

<p>
  <img
    src="https://skillicons.dev/icons?i=ts,nodejs,pnpm,vite,vitest,eslint,prettier"
    alt="TypeScript, Node.js, pnpm, tsdown ecosystem, Vitest, ESLint, Prettier"
  />
</p>

Build TypeScript libraries with `tsdown`, dual ESM/CJS output, Vitest, ESLint, and Prettier.

English | [简体中文](./README.zh-CN.md)

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
