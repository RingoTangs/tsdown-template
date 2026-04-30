# tsdown-template

一个基于 `tsdown` 的精简 TypeScript npm 库模板。

<p>
  <img
    src="https://skillicons.dev/icons?i=ts,nodejs,pnpm,vite,vitest,eslint,prettier"
    alt="TypeScript、Node.js、pnpm、tsdown 生态、Vitest、ESLint、Prettier"
  />
</p>

使用 `tsdown` 构建 TypeScript 库，默认提供 ESM / CJS 双格式产物，并集成 Vitest、ESLint 与 Prettier。

[English](./README.md) | 简体中文

## 环境要求

- Node.js `>=18`
- pnpm `10`

## 常用命令

- `pnpm i`：安装依赖
- `pnpm build`：生成本地开发构建，保留 sourcemap
- `pnpm build:publish`：生成发布构建，启用压缩且不保留 sourcemap
- `pnpm test:run`：执行一次 Vitest 测试
- `pnpm check`：执行 lint、格式检查、类型检查和测试

## 使用方式

1. 基于此模板创建新的仓库。
2. 按你的项目需求更新 `package.json` 元信息。
3. 执行 `pnpm i` 安装依赖。
4. 开发时使用 `pnpm build`。
5. 提交前使用 `pnpm check` 做完整校验。

发布前会通过 `prepublishOnly` 自动执行 `pnpm build:publish`。

## 输出说明

发布包只包含 `dist/` 中的构建产物，并同时提供 ESM 和 CJS 入口。
