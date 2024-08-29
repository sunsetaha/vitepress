const navBar = [
    { text: 'sunsetz', link: 'http://sunsetz.cn'},
    {
        text: '前端知识',
        items: [
            { text: 'HTML+CSS', link: '/frontend/css/flex' },
            { text: 'JavaScript', link: '/frontend/js/dataStructure' },
            // { text: 'JS', link: '/frontend/js/intro' },
            // { text: 'VUE', link: '/frontend/vue/intro' },
            // { text: 'React', link: '/frontend/react/intro' },
        ]
},
    // {
    //     text: '后端知识',
    //     items: [
    //         {
    //             text: '基础',
    //             items: [
    //                 { text: 'Java', link: '/backend/java/intro' },
    //                 { text: 'SSM', link: '/backend/ssm/intro' },
    //                 { text: 'SpringBoot', link: '/backend/springboot/intro' },
    //                 { text: 'Nest.js', link: '/backend/nest/intro' }
    //             ]
    //         },
    //         {
    //             text: '提升',
    //             items: [
    //                 { text: 'Linux', link: '/backend/linux/intro' },
    //                 { text: 'Doker', link: '/backend/docker/intro' }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     text: '日思夜想',
    //     items: [
    //         {
    //             text: '日思',
    //             items: [
    //                 { text: '1', link: '/notes/day/intro' }
    //             ]
    //         },
    //         {
    //             text: '夜想',
    //             items: [
    //                 { text: '1', link: '/notes/night/intro' }
    //             ]
    //         }
    //     ]
    // },
    {
        text: '杂项',
        items: [
            { text: 'vitepress', link: '/sundry/vitepress/intro' },
            { text: 'vue3js', link: '/sundry/vue3js/intro' },
            { text: 'python爬虫', link: '/sundry/python/intro' }
        ]
    },
    {
        text: '实践记录',
        items: [
            { text: '前端自动化部署', link: '/practice/automaticdeployment' }
        ]
    },
    { text: '关于', link: '/about/index' }
]

export default navBar;
