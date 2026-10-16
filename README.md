# tsdown-template

<p align="center">
  <strong>A minimal TypeScript library template powered by tsdown.</strong>
</p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%3E%3D22-5FA04E?logo=nodedotjs&logoColor=white">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white">
  <img alt="tsdown" src="https://img.shields.io/badge/tsdown-0.23-0F172A?logo=vite&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier&logoColor=1A2B34">
</p>

<p align="center">
  Build TypeScript libraries with dual ESM/CJS output, typed declarations, and a ready-to-use quality toolchain.
</p>

<p align="center">
  English | <a href="./README.zh-CN.md">简体中文</a>
</p>

## Requirements

- Node.js `>=22` to run the package
- Node.js `22.23.2` to develop this template
- pnpm `10`

## Development

- `pnpm i` installs dependencies
- `pnpm dev` creates an unminified local development build
- `pnpm build` creates a minified production build, with publint package checks and attw TypeScript type resolution compatibility checks (`node16` profile) enabled only in production
- `pnpm test` runs the Vitest suite once
- `pnpm lint` runs ESLint over the repository
- `pnpm lint:fix` applies safe ESLint fixes
- `pnpm format` checks formatting with Prettier
- `pnpm format:fix` formats supported files with Prettier
- `pnpm typecheck` runs TypeScript project references with `tsc -b`
- `pnpm check` runs lint, format check, typecheck, and tests
- `pnpm check:fix` runs lint and format fixes
- `pnpm pack:check` previews the files npm will package

## Usage

1. Select **Use this template** on GitHub to create a new repository.
2. Update the package name and related metadata in `package.json`.
3. Replace the example code in `src/` with your library implementation.
4. Run `pnpm i` to install dependencies, then use `pnpm dev` during development.
5. Verify changes with `pnpm check` and run `pnpm build` to check the production package.

The build targets Node.js (`platform: 'node'`).

## Publishing

### Manual publishing

Before publishing a real npm package:

1. Remove `private: true` from `package.json` or set it to `false`.
2. Update `name`, `version`, `description`, `author`, `repository`, `bugs`, and `homepage`.
3. Run `pnpm check` to verify linting, formatting, types, and tests.
4. Run `pnpm build` to create the package artifacts.
5. Run `pnpm pack:check` to inspect the package contents.
6. Authenticate with npm using an account with permission to publish the package, then run `npm publish` when the dry-run output looks correct. For a prerelease, specify the appropriate dist-tag, such as `npm publish --tag beta`.

Steps 3–5 provide an explicit preflight check. `npm publish` automatically repeats them through the `prepublishOnly` lifecycle script, running `pnpm check`, `pnpm build`, and `pnpm pack:check` in that order.

### GitHub Actions publishing

The publish workflow runs when a Git Tag starting with `v` is pushed. The version after `v` must exactly match `package.json`. Stable versions use the `latest` npm dist-tag; prereleases support `alpha`, `beta`, and `rc`, using the matching dist-tag. Other prerelease channels are rejected.

Publishing uses npm Trusted Publishing / OIDC. Configure a Trusted Publisher for your package on npm, linking the new GitHub repository and the `publish.yml` workflow file, with permission to publish. See the [npm Trusted Publishing documentation](https://docs.npmjs.com/trusted-publishers/). For a new package, complete any required initial manual publication and npm setup before using this workflow; pushing a Tag does not replace that setup. Remove or disable `private: true` before publishing.

After committing and pushing the version and publishing configuration changes, create and push a Tag for an unpublished version:

```sh
PACKAGE_VERSION=$(node -p "require('./package.json').version")
git tag "v$PACKAGE_VERSION"
git push origin "v$PACKAGE_VERSION"
```

The workflow runs `npm publish`, which executes the same `prepublishOnly` checks described above. Its publish job is disabled for the original `RingoTangs/tsdown-template` repository and enabled for repositories created from the template.

## Output

Builds write ESM (`index.mjs`), CommonJS (`index.cjs`), and corresponding TypeScript declarations (`index.d.mts` and `index.d.cts`) to `dist/`. The root package `exports` maps `import` and `require` to their runtime files and declarations. Production builds minify runtime files; development builds leave them unminified. Runtime files start with a banner containing the package name and version.

The `files` field includes `dist/` in the npm package, along with npm's automatically included package metadata, README, and LICENSE.
