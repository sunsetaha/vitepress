import navBar from './config/navBar.js'
import {docker} from "./config/sidebar/docker";
import {vitepress} from "./config/sidebar/vitepress";
import {vue3js} from "./config/sidebar/vue3js";

module.exports = {
  title: 'sunset の 窝',
  description: '用于记录、整理、存储和管理个人相关信息的文档。',
  base: '/',
  head: [
    // 添加link标签指定favicon.ico的位置
    ['link', { rel: 'icon', href: '/images/logo.gif' }]
  ],
  themeConfig: {
    logo: '/images/avatar.jpg',
    // 主导航
    nav: navBar,
    // 侧边导航
    sidebar: {
      '/notes/docker': docker,
      '/sundry/vitepress': vitepress,
      '/sundry/vue3js': vue3js,
    },
    // 菜单中文化
    outlineTitle: '本页目录',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 社交链接
    // socialLinks: [{ icon: "github", link: "https://github.com" }],
    footer: {
      message: '<a href="http://beian.miit.gov.cn/">粤ICP备2023058913号-1</a>',
      copyright: 'Copyright © 2023-present <a href="http://resume.sunsetz.cn/">sunsetz</a>'
    }
  },
}
