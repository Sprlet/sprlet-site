# 数字型嘟嘟可 · 个人站

一个纯静态的个人站：博客 + 小工具。

没有后端，没有数据库，没有 CDN。构建产物是 `dist/` 里的一堆静态文件，扔到任何 nginx 后面就能跑。

## 技术栈

| 用途 | 方案 | 说明 |
| --- | --- | --- |
| 站点框架 | Astro 7 | 默认输出零 JS，只有工具页会加载脚本 |
| 搜索 | Pagefind | 构建后切索引，浏览器里跑 WASM，无服务端 |
| 代码高亮 | Shiki | 构建时渲染成静态 HTML |
| 二维码 | qrcode | 打包进工具页，本地生成 |
| 站点地图 | @astrojs/sitemap | 自动生成 |

所有字体走系统字体栈，不下载字体文件；所有 CSS/JS 都打进产物，不外链。整站没有跨域请求。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
```

## 构建

```bash
npm run build      # 输出 dist/，并自动跑 pagefind 生成搜索索引
npm run preview    # 本地预览构建产物
```

只用 `astro build` 而不跑 pagefind 的话，搜索页会没有结果。

## 部署

把 `dist/` 整个目录传到服务器，nginx 指过去即可。样例配置见 [`deploy/nginx.conf`](deploy/nginx.conf)。

站点域名在 `astro.config.mjs` 里，或构建时用环境变量指定：

```bash
SITE_URL=https://your-domain.com npm run build
```

改域名只需重新构建，代码不用动。

## 写文章

在 `src/content/posts/` 下新建 `.md` 文件：

```markdown
---
title: 文章标题
description: 一句话摘要，会显示在列表和分享卡片里
pubDate: 2026-10-22
tags: ["标签一", "标签二"]
draft: false
---

正文……
```

`draft: true` 的文章不会出现在任何页面、RSS 和搜索索引里。

## 加工具

1. 在 `src/data/tools.ts` 里加一条元数据（slug、标题、描述、图标、分类）。
2. 在 `src/pages/tools/<slug>.astro` 里写页面，用 `Tool` 布局包起来。
3. 脚本写在页面内的 `<script>` 里，Astro 会自动打包，只在那个页面加载。

## 目录结构

```
├── astro.config.mjs
├── deploy/
│   └── nginx.conf
├── public/
│   ├── favicon.svg
│   └── og.png
└── src/
    ├── components/      Header / Footer / PostList
    ├── content/posts/   markdown 文章
    ├── data/tools.ts    工具目录
    ├── layouts/         Base / Tool
    ├── pages/
    │   ├── blog/        列表 + 详情
    │   ├── tags/        标签页
    │   ├── tools/       六个工具
    │   └── ...
    └── styles/global.css  设计令牌与全部样式
```

## 设计说明

深色为默认主题，浅色可切换，选择会记住。配色令牌集中在 `global.css` 顶部，改 `--accent` 一处就能换掉整站强调色。

动效有三处：背景极光缓慢漂移、鼠标位置的光斑、滚动进入时的位移淡入。全部遵守 `prefers-reduced-motion`，关掉动效不影响任何功能。

## 许可

内容（文章）版权归作者所有。代码部分随意取用。
