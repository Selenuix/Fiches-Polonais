module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        //['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }]
    ],
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ]
    ],
    base: "/Fiches-Polonais/",
    title: 'Fiches Polonais',
    description: 'Apprendre et retenir',
    themeConfig: {
        home: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nav: [
            { text: 'Acceuil', link: '/' },
            { text: 'Exercices', link: '/exercises/' },
        ]
    },
  }