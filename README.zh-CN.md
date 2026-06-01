# tsdown-template

<p align="center">
  <strong>一个基于 tsdown 的精简 TypeScript 库模板。</strong>
</p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%3E%3D18-5FA04E?logo=nodedotjs&logoColor=white">
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white">
  <img alt="tsdown" src="https://img.shields.io/badge/tsdown-0.21-0F172A?logo=vite&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier&logoColor=1A2B34">
</p>

<p align="center">
  默认提供 ESM / CJS 双格式产物、类型声明生成，以及可直接使用的测试与代码质量工具链。
</p>

<p align="center">
  <a href="./README.md">English</a> | 简体中文
</p>

## 环境要求

- Node.js `>=18`
- pnpm `10`

## 常用命令

- `pnpm i`：安装依赖
- `pnpm build`：生成本地开发构建，保留 sourcemap
- `pnpm build:publish`：生成发布构建，启用压缩且不保留 sourcemap
- `pnpm format`：使用 Prettier 检查格式
- `pnpm format:fix`：使用 Prettier 格式化支持的文件
- `pnpm test:run`：执行一次 Vitest 测试
- `pnpm check`：执行 lint、格式检查、类型检查和测试
- `pnpm release:check`：执行完整发布前校验，包括打包 dry-run

## 使用方式

1. 基于此模板创建新的仓库。
2. 按你的项目需求更新 `package.json` 元信息。
3. 执行 `pnpm i` 安装依赖。
4. 开发时使用 `pnpm build`。
5. 提交前使用 `pnpm check` 做完整校验。

发布真实 npm 包前，需要删除 `package.json` 中的 `private: true`，或将其改为 `false`。

发布前会通过 `prepublishOnly` 自动执行 `pnpm release:check`。

## 输出说明

发布包只包含 `dist/` 中的构建产物，并同时提供 ESM 和 CJS 入口。
