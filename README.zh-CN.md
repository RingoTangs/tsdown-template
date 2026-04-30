# tsdown-template

[English](./README.md) | 简体中文

一个基于 `tsdown` 的精简 TypeScript npm 库模板。

## 技术栈

<p>
  <img
    src="https://skillicons.dev/icons?i=ts,nodejs,pnpm,vite,vitest,eslint,prettier"
    alt="TypeScript、Node.js、pnpm、tsdown 生态、Vitest、ESLint、Prettier"
  />
</p>

- `TypeScript`：编写库代码并生成类型声明
- `tsdown`：输出 ESM / CJS 双格式产物
- `Vitest`：执行单元测试
- `ESLint` 与 `Prettier`：保证代码质量和格式一致
- `pnpm`：管理依赖

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
