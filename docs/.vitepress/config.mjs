import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AU-topia",
  description: "A guide to your new home",
  head:[['link', { rel: 'icon', href: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/440px-Alliance_University_Icon.svg.png' }], 
  ['link', { rel: 'stylesheet', href: '/style.css' }]],
  themeConfig: {
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/440px-Alliance_University_Icon.svg.png',
    siteTitle: 'Alliance University',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index.md' },
      { text: 'Useful Links', link: '/links.md' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/intro.md'},
          { text: 'General Information', link: '/g_info.md' },
          { text: 'Useful Links', link: '/links.md' },
        ]
      },
      {
        text: 'Academics',
        items: [
          { text: 'ACED', link: '' },
          { text: 'ASOB', link: '' },
          { text: 'ASOL', link: '' },
          { text: 'ASLA', link: '' },
        ]
      },
      {
        text: 'Campus Life',
        items: [
          { text: 'Events', link: '/events.md' },
          { text: 'Library', link: '/' },
          { text: 'Hostels', link: '/' },
          { text: 'Clubs', link: '/' },
          { text: 'Places to hang out', link: '/' },
          { text: 'E-Resources', link: '/' },
          { text: 'Cafeterias', link: '/' },
          { text: 'Transport', link: '/' },
          { text: 'Sports', link: '/' },
          { text: 'DoSSS', link: '/' },
        ]
      },
      {
        items: [
          { text: 'Contact Us', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aadi-kanwar/au_topia' },
      { icon: 'twitter', link: 'https://twitter.com/AllianceUniOfcl'},
      { icon: 'linkedin', link: 'https://www.linkedin.com/school/allianceuniofcl/'},
      { icon: 'facebook', link: 'https://www.facebook.com/AllianceUniOfcl'},
      { icon: 'instagram', link: 'https://www.instagram.com/allianceuniofcl/'},
      { icon: 'youtube', link: 'https://www.youtube.com/@AllianceUniOfcl'}
    ],

    footer: {
      message: 'Made by Aadi Kanwar',
      copyright: 'Copyright © 2024 Alliance University'
    }

  }
})
