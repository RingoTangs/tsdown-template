# tsdown-template

A minimal TypeScript library template powered by `tsdown`.

## Requirements

- Node.js `>=22`
- pnpm `10`

## Commands

- `pnpm i` installs dependencies
- `pnpm build` builds ESM, CJS, and type declarations into `dist/`
- `pnpm test:run` runs the Vitest suite once
- `pnpm check` runs lint, format check, typecheck, and tests

## Usage

1. Create a new repository from this template.
2. Update `package.json` metadata for your package.
3. Run `pnpm i`.
4. Build and verify with `pnpm check`.

## Output

The package publishes files from `dist/` only and exposes both ESM and CJS entry points.
