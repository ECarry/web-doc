const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  lang: 'zh-CN',
  title: 'Web 宝典',
  description: '无限进步',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    sidebarDepth: 2,
    navbar: [
      // NavbarItem
      {
        text: 'JavaScript',
        link: '/javascript/',
      },
      {
        text: 'TypeScript',
        link: '/TypeScript/',
      },
      // NavbarGroup
      {
        text: 'Vue',
        children: [
          {
            text: 'Vue 3',
            link: '/vue/vue3'
          },
          {
            text: 'Vue 2',
            link: '/vue/vue2'
          }
        ],
      },
      // 字符串 - 页面文件路径
      {
        text: 'GitHub',
        link: 'https://github.com/ECarry/web-doc',
      },
    ],
  })
}
