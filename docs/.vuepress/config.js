module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/blog/',
    plugins: [
        '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
        }, '@vuepress/back-to-top',
        '@vuepress/last-updated',
        '@vuepress/google-analytics',
        {
            'ga': '' // UA-00000000-0
        }
    ]
}