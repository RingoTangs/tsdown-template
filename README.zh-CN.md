# tsdown-template

<p align="center">
  <strong>一个基于 tsdown 的精简 TypeScript 库模板。</strong>
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
  默认提供 ESM / CJS 双格式产物、类型声明生成，以及可直接使用的测试与代码质量工具链。
</p>

<p align="center">
  <a href="./README.md">English</a> | 简体中文
</p>

## 环境要求

- 运行包需要 Node.js `>=22`
- 开发此模板需要 Node.js `22.23.2`
- pnpm `10`

## 日常开发

- `pnpm i`：安装依赖
- `pnpm dev`：生成未压缩的本地开发构建
- `pnpm build`：生成压缩后的生产构建，仅在生产构建中启用 publint 包规范检查和 attw TypeScript 类型解析兼容性检查（`node16` profile）
- `pnpm test`：执行一次 Vitest 测试
- `pnpm lint`：对仓库运行 ESLint
- `pnpm lint:fix`：应用 ESLint 自动修复
- `pnpm format`：使用 Prettier 检查格式
- `pnpm format:fix`：使用 Prettier 格式化支持的文件
- `pnpm typecheck`：使用 `tsc -b` 检查 TypeScript 项目引用
- `pnpm check`：执行 lint、格式检查、类型检查和测试
- `pnpm check:fix`：执行 lint 和 format 自动修复
- `pnpm pack:check`：预览 npm 将要打包的文件

## 使用方式

1. 在 GitHub 点击 **Use this template** 创建新仓库。
2. 更新 `package.json` 中的包名及相关元信息。
3. 将 `src/` 中的示例代码替换为你的库实现。
4. 执行 `pnpm i` 安装依赖，开发时使用 `pnpm dev`。
5. 使用 `pnpm check` 校验变更，并执行 `pnpm build` 检查生产包。

当前构建面向 Node.js（`platform: 'node'`）。

## 发布说明

### 手动发布

发布真实 npm 包前：

1. 删除 `package.json` 中的 `private: true`，或将其改为 `false`。
2. 更新 `name`、`version`、`description`、`author`、`repository`、`bugs` 和 `homepage`。
3. 执行 `pnpm check`，验证 lint、格式、类型和测试。
4. 执行 `pnpm build`，生成待发布的包产物。
5. 执行 `pnpm pack:check`，检查 npm 包内容。
6. 使用有权发布该包的账号完成 npm 身份认证，确认 dry-run 输出无误后执行 `npm publish`。发布预发布版本时，指定相应的 dist-tag，例如 `npm publish --tag beta`。

第 3～5 步用于发布前主动检查。`npm publish` 会通过 `prepublishOnly` 生命周期脚本自动重复执行这些检查，依次运行 `pnpm check`、`pnpm build` 和 `pnpm pack:check`。

### GitHub Actions 自动发布

推送以 `v` 开头的 Git Tag 时会触发发布工作流。去掉 `v` 后的版本必须与 `package.json` 完全一致。正式版本使用 npm dist-tag `latest`；预发布版本支持 `alpha`、`beta`、`rc`，并使用同名 dist-tag，其他预发布通道会被拒绝。

发布使用 npm Trusted Publishing / OIDC。需要在 npm 侧为包配置 Trusted Publisher，关联新项目的 GitHub 仓库和 `publish.yml` 工作流文件，并授予发布权限，详见 [npm Trusted Publishing 文档](https://docs.npmjs.com/trusted-publishers/)。新包应先完成必要的首次手动发布和 npm 侧配置，再使用此工作流；推送 Tag 不能替代这些准备工作。发布前必须移除或关闭 `private: true`。

提交并推送版本及发布配置变更后，为尚未发布的版本创建并推送 Tag：

```sh
PACKAGE_VERSION=$(node -p "require('./package.json').version")
git tag "v$PACKAGE_VERSION"
git push origin "v$PACKAGE_VERSION"
```

工作流执行 `npm publish`，会运行上述相同的 `prepublishOnly` 检查。发布任务在模板原仓库 `RingoTangs/tsdown-template` 中被禁用，在基于模板创建的新仓库中启用。

## 输出说明

构建将 ESM（`index.mjs`）、CommonJS（`index.cjs`）及对应的 TypeScript 类型声明（`index.d.mts` 和 `index.d.cts`）写入 `dist/`。包根入口的 `exports` 为 `import` 和 `require` 分别指定运行时文件及类型声明。生产构建压缩运行时文件，开发构建不压缩。运行时文件的开头包含由包名和版本号组成的 banner。

`files` 字段将 `dist/` 纳入 npm 发布包，此外还包含 npm 自动加入的包元数据、README 和 LICENSE。
