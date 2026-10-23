export interface Tool {
  slug: string;
  title: string;
  desc: string;
  long: string;
  icon: string;
  tag: string;
  external?: string;
}

export const tools: Tool[] = [
  {
    slug: 'flomo',
    title: 'flomo 笔记',
    desc: 'flomo 网页版整页嵌进来，随手记两笔。',
    long: '把 flomo 的网页版整个嵌在这一页里，不用开新标签也不用跳走。登录态是 flomo 自己的，第一次进来登一下就行。',
    icon: 'note',
    tag: '笔记',
  },
  {
    slug: 'exam',
    title: '刷题助手',
    desc: '自己的题库应用，刷题、错题本和模拟考。',
    long: '刷题用的独立应用，题库、错题本、模拟考都在里面。它有自己的仓库，单独部署，从这儿过去就行。',
    icon: 'book',
    tag: '学习',
    external: 'https://sprlety.me/exam/',
  },
  {
    slug: 'json',
    title: 'JSON 格式化',
    desc: '压缩、美化、校验，错误定位到行列。',
    long: '把一坨挤在一起的 JSON 排开，或者把能省的空格全省掉。格式不对的时候直接告诉你第几行第几列。',
    icon: 'braces',
    tag: '开发',
  },
  {
    slug: 'timestamp',
    title: '时间戳转换',
    desc: '秒、毫秒、日期互转，顺带算间隔。',
    long: 'Unix 时间戳和人类可读时间来回换，支持秒和毫秒，另外算两个时间点差多少。',
    icon: 'clock',
    tag: '开发',
  },
  {
    slug: 'codec',
    title: '编码转换',
    desc: 'Base64、URL、HTML 实体、十六进制。',
    long: '四种常见编码往返，UTF-8 正确处理中文。调试接口和看乱码的时候最有用。',
    icon: 'code',
    tag: '文本',
  },
  {
    slug: 'qrcode',
    title: '二维码生成',
    desc: '文本转二维码，可下载 PNG。',
    long: '把链接或文字转成二维码，能调尺寸和纠错等级，生成完直接存图。全部在浏览器里算。',
    icon: 'grid',
    tag: '生成',
  },
  {
    slug: 'color',
    title: '颜色转换',
    desc: 'HEX、RGB、HSL 互转，带对比度检查。',
    long: '三种颜色模型互转，顺带算 WCAG 对比度，看看这个配色到底能不能读。',
    icon: 'palette',
    tag: '设计',
  },
  {
    slug: 'hash',
    title: '哈希计算',
    desc: 'SHA-1 / 256 / 384 / 512，本地算。',
    long: '用浏览器自带的 Web Crypto 算摘要，不联网，文本不会被传到任何地方。',
    icon: 'shield',
    tag: '安全',
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
