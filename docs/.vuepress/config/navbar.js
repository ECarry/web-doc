const navbar = [
  // NavbarItem
  {
    text: 'JavaScript',
    link: '/javascript/base.md',
  },
  {
    text: 'TypeScript',
    link: '/typescript/TypeScript.md',
  },
  // NavbarGroup
  {
    text: 'Vue',
    children: [
      {
        text: 'Vue 3',
        link: '/vue3/'
      },
      {
        text: 'Vue 2',
        link: '/vue2/'
      }
    ],
  },
  {
    text: 'Vite',
    link: '/vite/'
  },
  {
    text: 'uni-app',
    link: '/uniapp/index.md',
  },
  // 字符串 - 页面文件路径
  {
    text: 'GitHub',
    link: 'https://github.com/ECarry/web-doc',
  },
]

module.exports = navbar
