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
]

module.exports = navbar
