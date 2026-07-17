# 谢佳涵的个人网站

基于 Astro + React 构建的静态个人网站。工程内包含运行和部署所需的页面与优化后素材，不依赖工程外部的 `source` 目录。

## 本地运行

```bash
pnpm install
pnpm dev
```

默认开发地址为 `http://localhost:4321`。

## 构建与预览

```bash
pnpm build
pnpm preview
```

构建结果位于 `dist`。

## 内容位置

- 页面：`src/pages`
- 组件：`src/components`
- 内容数据：`src/data/site.ts`
- 全局样式：`src/styles/global.css`
- 优化后图片：`public/media`

原始素材位于项目根目录的 `source`，不要在网站工程中直接引用原始大图。

## 发布到 GitHub Pages

本工程已经按 GitHub 用户主页准备，目标地址为：

```text
https://13270131998.github.io/
```

部署步骤：

1. 在 GitHub 创建名为 `13270131998.github.io` 的公开仓库，默认分支使用 `main`。
2. 将当前目录中的工程内容提交到仓库根目录。仓库根目录应直接看到 `.github`、`public`、`scripts`、`src`、`astro.config.mjs`、`package.json` 和 `pnpm-lock.yaml`。
3. 不要上传 `node_modules`、`.astro` 和 `dist`；它们已经写入 `.gitignore`，GitHub Actions 会重新安装依赖并构建网站。
4. 打开仓库的 `Settings → Pages`，将 `Build and deployment → Source` 设置为 `GitHub Actions`。
5. 推送到 `main` 后，在仓库 `Actions` 页面等待 `Deploy to GitHub Pages` 工作流完成。
6. 工作流成功后访问 `https://13270131998.github.io/`。

部署工作流位于 `.github/workflows/deploy.yml`。以后每次推送到 `main`，网站都会自动重新构建和发布。

> 注意：公开仓库中的源码、照片、手机号、邮箱和微信二维码都可以被他人查看。提交前请确认这些内容可以长期公开。
