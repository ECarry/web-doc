const sidebar = {
  '/javascript/': [
    {
      text: 'javascript',
      collapsible: true,
      children: [
        '/javascript/base.md'
      ]
    },
    {
      text: '面试',
      collapsible: true,
      children: [
        '/javascript/interview/数据类型.md',
        '/javascript/interview/js基础.md',
        '/javascript/interview/es6.md',
        '/javascript/interview/手撸代码.md'
      ]
    }
  ],
  '/vue3/': [
    {
      text: 'Vue3 宝典',
      collapsible: true,
      children: [
        '/vue3/vue3.md',
        '/vue3/project.md'
      ]
    },
    {
      text: '面试',
      collapsible: true,
      children: [
        '/vue3/interview.md'
      ]
    }
  ]
}

module.exports = sidebar
