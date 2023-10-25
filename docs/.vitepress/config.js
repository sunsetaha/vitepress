module.exports = {
  title: 'sunset の 窝',
  description: '用于记录、整理、存储和管理个人相关信息的文档。',
  base: '/',
  themeConfig: {
    // 主导航
    nav: [
      { text: 'sunsetz', link: 'http://sunsetz.cn'},
      { text: '杂文', link: '/articles/vitepress', activeMatch: '/articles/vitepress' },
      {
        text: '前端系列',
        items: [
          { text: 'vue3', link: '/' },
          { text: 'more', link: 'http://www.baidu.com' }
        ]
      },
      {
        text: '后端系列',
        items: [
          { text: 'springboot', link: '/' },
          { text: 'more', link: 'http://www.baidu.com' }
        ]
      }
    ],
    // 侧边导航
    sidebar:{
      "/articles/": [
        {
          text: "杂文",
          items: [
            {
              text: "vitepress食用",
              link: "/articles/vitepress",
            },
            { text: "test", link: "/articles/test" },
          ],
        },
        {
          text: "前端",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com" }],

  }
}