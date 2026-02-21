import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Atlas CMS',
  description: 'Documentation for Atlas CMS Headless CMS',
  themeConfig: {
    logo: { src: '/logo-placeholder.svg', alt: 'Atlas CMS' },
    nav: [
      { text: 'Introduction', link: '/introduction/what-is-atlas-cms' },
      { text: 'Admin UI', link: '/admin-ui/create-project' },
      { text: 'API Overview', link: '/api-overview/api-basics' },
      { text: 'API Reference', link: '/api-reference/' },
      { text: 'Client SDK', link: '/client-sdk/javascript' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is Atlas CMS?', link: '/introduction/what-is-atlas-cms' },
          { text: 'Use Cases', link: '/introduction/use-cases' },
          { text: 'Getting Started', link: '/introduction/getting-started' },
        ]
      },
      {
        text: 'Admin UI',
        collapsed: false,
        items: [
          { text: 'Create a project', link: '/admin-ui/create-project' },
          { text: 'Modeling Data', link: '/admin-ui/modeling-data' },
          { text: 'Fields', link: '/admin-ui/fields' },
          { text: 'Manage Contents', link: '/admin-ui/manage-contents' },
          { text: 'Media Library', link: '/admin-ui/media-library' },
          { text: 'Settings', link: '/admin-ui/settings' },
        ]
      },
      {
        text: 'API Overview',
        collapsed: false,
        items: [
          { text: 'Api Basics', link: '/api-overview/api-basics' },
          { text: 'Filtering', link: '/api-overview/filtering' },
          { text: 'Models', link: '/api-overview/models' },
          { text: 'Contents', link: '/api-overview/contents' },
          { text: 'Filtering Contents', link: '/api-overview/filtering-contents' },
          { text: 'Media Library', link: '/api-overview/media-library' },
        ]
      },
      {
        text: 'API Reference',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/api-reference/' },
          { text: 'Accounts', link: '/api-reference/accounts' },
          { text: 'API Tokens', link: '/api-reference/api-tokens' },
          { text: 'Contents', link: '/api-reference/contents' },
          { text: 'Models', link: '/api-reference/models' },
          { text: 'Media Library', link: '/api-reference/media-library' },
          { text: 'Assets', link: '/api-reference/assets' },
          { text: 'Projects', link: '/api-reference/projects' },
          { text: 'Project Memberships', link: '/api-reference/project-memberships' },
          { text: 'Users', link: '/api-reference/users' },
          { text: 'Roles', link: '/api-reference/roles' },
          { text: 'Webhooks', link: '/api-reference/webhooks' },
          { text: 'Audits', link: '/api-reference/audits' },
          { text: 'Configurations', link: '/api-reference/configurations' },
          { text: 'Reports', link: '/api-reference/reports' },
          { text: 'Subscriptions', link: '/api-reference/subscriptions' },
          { text: 'Temp', link: '/api-reference/temp' },
        ]
      },
      {
        text: 'Client SDK',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/client-sdk/' },
          { text: 'Javascript', link: '/client-sdk/javascript' },
          { text: '.NET Core', link: '/client-sdk/dotnet-core' },
        ]
      },
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/atlascms' }
    ],
    footer: {
      message: 'Atlas CMS Documentation',
      copyright: 'Copyright © Atlas CMS'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
})
