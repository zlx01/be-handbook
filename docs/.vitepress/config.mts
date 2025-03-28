import { defineConfig } from 'vitepress'

const base = process.env.DEPLOY_BASE

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "be-handbook",
  description: "Back-End Web Developer HandBook",
  base: base || '/be-handbook/',
  head: [
    ['meta', { name: 'author', content: 'zlx' }],
    ['meta', { name: 'keywords', content: 'backend, back-end, handbook, developer, web, java, java ee, tomcat, servlet, jsp, spring, spring boot, spring cloud, maven, gradle, mysql, oracle, redis' }],
    ['meta', { name: 'generator', content: 'vitepress' }],
  ],
  lastUpdated: true,
  markdown: {
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zlx01/be-handbook' }
    ]
  }
})
