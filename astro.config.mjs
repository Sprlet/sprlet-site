// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点地址：构建时可用 SITE_URL 覆盖，未设置时用占位域名。
// 部署到自己的域名后，改成真实地址即可，无需改代码。
const SITE = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
