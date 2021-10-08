module.exports = {
  title: 'Wex-UI',
  base:'/wex-ui/',
  description: 'Just playing around',
  themeConfig: {
    //导航
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/componentdocs/'},
      {text:'更新日志',link:'/update/index'},
      { text: 'GitHub', link: 'https://github.com/LSFCXZ/wex-ui' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/wex-ui' },
    ],
    sidebar: {
     '/componentdocs/': [
         {
        title: '简介',
        path:'/componentdocs/'
      },
      {
        title: '快速开始',
        path:'/componentdocs/start'
      },
      {
        title: '卡片',
        path:'/componentdocs/card'
      }
      ]
    }
 
     
    
  }
}