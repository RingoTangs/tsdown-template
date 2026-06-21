# Repository Guidelines

## Project Structure & Module Organization

This is a small TypeScript package template built with `tsdown`. Source code lives in `src/`, with the public entry point at `src/index.ts`. Shared or ambient declarations can live in `types/`. The build writes generated output to `dist/`; do not edit generated files directly. TypeScript configuration is split across `tsconfig*.json`, with `tsconfig.build.json` used by `tsdown` and `tsconfig.test.json` reserved for tests. Build and lint config are in `tsdown.config.ts` and `eslint.config.mjs`.

Use the `@` alias for imports from `src/` when it improves readability, for example `@/utils`.

## Build, Test, and Development Commands

Use pnpm with Node.js `>=18.0.0`.

- `pnpm build`: bundles `src/index.ts` to `dist/` as CJS and ESM and emits declarations.
- `pnpm build:watch`: rebuilds the library when source files change.
- `pnpm test`: starts Vitest in watch mode.
- `pnpm test:run`: runs the Vitest suite once for CI-style checks.
- `pnpm lint`: runs ESLint over the repository.
- `pnpm lint:fix`: applies safe ESLint fixes.
- `pnpm format`: checks formatting with Prettier.
- `pnpm format:fix`: formats supported files with Prettier.
- `pnpm typecheck`: runs TypeScript project references with `tsc -b`.
- `pnpm check`: runs lint, format check, typecheck, and tests.
- `pnpm fix`: applies ESLint and Prettier fixes.
- `pnpm release:build`: creates the minified publish build without sourcemaps.
- `pnpm release:pack`: previews the files npm will package with `npm pack --dry-run`.
- `pnpm release:check`: runs full release validation before publishing.
- `prepublishOnly`: npm lifecycle script that automatically runs `pnpm release:check` during `npm publish`.

## Coding Style & Naming Conventions

Write ESM TypeScript. Prefer named exports from `src/index.ts` for public API additions. Use camelCase for variables/functions, PascalCase for types/classes, and kebab-case for non-code file names where practical. Keep modules focused and colocate helpers under `src/`.

Formatting is handled by Prettier, while ESLint uses `@antfu/eslint-config` with TypeScript and test support. Run `pnpm fix` before committing routine style changes.

## Testing Guidelines

Vitest is the test framework. Add tests next to the code they cover under `src/`, using names like `*.test.ts` or `*.spec.ts`; for example, `src/utils/format.test.ts`. Prefer fast unit tests for exported behavior. Run `pnpm test:run` before opening a pull request.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit-style messages, for example `feat: add sum function and update TypeScript configuration for module resolution`. Continue with short, imperative messages such as `fix: handle empty input` or `chore: update lint config`.

Pull requests should include a concise description, relevant issue links, and notes about testing performed. Include screenshots only for changes that affect generated documentation or visual output. Keep PRs scoped to one logical change.

## Agent-Specific Instructions

Do not modify `pnpm-lock.yaml` unless dependencies change. Avoid committing generated `dist/` output unless the project policy changes. Prefer existing scripts and configuration over adding new tooling.
