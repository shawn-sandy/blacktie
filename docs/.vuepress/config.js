module.exports = {
  title: 'Black Tie Docs',
  description: 'Just playing around',
  base: '/docs',
  dest: 'dist/docs',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
