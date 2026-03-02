import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Atlas CMS',
  description: 'Documentation for Atlas CMS Headless CMS',
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: '/images/logo-dark.svg',
      dark: '/images/logo-white.svg',
      alt: 'Atlas CMS',
    },
    siteTitle: false,
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
        collapsed: true,
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
        collapsed: true,
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
        collapsed: true,
        items: [
          { text: 'Overview', link: '/api-reference/' },
          { text: 'Contents', link: '/api-reference/contents' },
          { text: 'Models', link: '/api-reference/models' },
          { text: 'Media Library', link: '/api-reference/media-library' },
          { text: 'Assets', link: '/api-reference/assets' },
          { text: 'Users', link: '/api-reference/users' },
          { text: 'Roles', link: '/api-reference/roles' },
          { text: 'Audits', link: '/api-reference/audits' },
          { text: 'Admin - Project', link: '/api-reference/admin-project' },
          { text: 'Admin - API Keys', link: '/api-reference/admin-api-keys' },
          { text: 'Admin - Webhooks', link: '/api-reference/admin-webhooks' },
        ]
      },
      {
        text: 'Client SDK',
        collapsed: true,
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
    ['link', { rel: 'icon', href: '/images/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap' }],
  ],
})
