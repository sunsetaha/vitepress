const navBar = [
    { text: 'sunsetz', link: 'http://sunsetz.cn'},
    {
        text: '前端知识沉淀',
        items: [
            { text: 'HTML+CSS+JS', link: '/frontend/hcj/intro' },
            { text: 'VUE', link: '/frontend/vue/intro' },
            { text: '自动化构建工具', link: '/frontend/packaging/intro' },
            { text: '性能优化', link: '/frontend/optimize/intro' },
            { text: '其他技能', link: '/frontend/skill/intro' }
        ]
    },
    {
        text: '证明我是有学过的😳',
        items: [
            { text: 'docker', link: '/notes/docker/intro' }
        ]
    },
    {
        text: '杂项',
        items: [
            { text: 'vitepress', link: '/sundry/vitepress/intro' },
            { text: 'vue3js', link: '/sundry/vue3js/intro' }
        ]
    },
    { text: '关于', link: '/about/index' }
]

export default navBar;
