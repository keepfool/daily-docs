export default {
  title: 'Daily Docs',
  description: 'Daily dev notes, include web and blockchain development.',
  themeConfig: {
    sidebar: [
      {
        text: 'Git',
        items: [
          { text: 'Basics', link: '/git/index' },
          { text: 'Git Logs', link: '/git/log' },
          { text: 'Git Branches', link: '/git/branch' },
          { text: 'Git Tags', link: '/git/tag' },
          { text: 'Multiple Github Accounts', link: '/git/multiple-github-accounts' },
        ]
      },
      {
        text: 'Terminal',
        items: [
          { text: 'Tmux', link: '/terminal/tmux' },
        ]
      }, 
    ]
  }
}