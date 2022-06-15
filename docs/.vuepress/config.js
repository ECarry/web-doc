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
    navbar: require('./config/navbar.js'),
    sidebar: require('./config/sidebar.js'),
  })
}
