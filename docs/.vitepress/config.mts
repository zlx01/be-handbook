import {DefaultTheme, defineConfig} from 'vitepress'

const base = process.env.DEPLOY_BASE

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "fullstack-handbook",
  description: "Fullstack Web Developer HandBook",
  base: base || '/fullstack-handbook/',
  head: [
    ['meta', { name: 'author', content: 'zlx' }],
    ['meta', { name: 'keywords', content: 'backend, handbook, developer, web, java, java ee, tomcat, servlet, jsp, spring, spring boot, spring cloud, maven, gradle, mysql, oracle, redis' }],
    ['meta', { name: 'generator', content: 'vitepress' }],
  ],
  lastUpdated: true,
  markdown: {
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/language/': sidebarLanguage(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zlx01/fullstack-handbook' }
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'MIT Licensed | Copyright © 2019-present zlx'
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'D5I8QWQRGT',
        apiKey: 'ecde0cc878112818b538f418a9ad3dec',
        indexName: 'fullstack-handbook'
      }
    },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Language',
      items: [
        {text: 'Java', link: '/language/java/'},
      ]
    },
  ]
}

function sidebarLanguage(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Language',
      collapsed: true,
      items: [
        { text: 'Java', link: '/language/java/' },
      ]
    },
  ]
}
