const { description } = require('../../package')

module.exports = {
  // theme: 'yur',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mafagafa',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Crianças, Computadores e Arte',

  /*
   * Extra tags to be injected to the page HTML `<head>`
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#f66759' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    lang: 'pt-BR',
    logo: '/small-logo-mafagafa.png',
    // author: 'Gil Fuser',
    // authorLink: 'https://gilfuser.net',
    locales: {
      title: 'Mafagafa',
      description: 'Crianças, computadores e criatividade'
    },
    
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Saiba Mais',
        link: '/guide/',
      },
      {
        text: 'Sobre mim',
        link: '/config/'
      },
      {
        text: 'Inspiração',
        link: 'https://vuepress.vuejs.org'
      }
    ],
    sidebar: false /*{
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
    */
  },
  postcss: {
    scss: { 
      // includePaths: [nodeModules]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
