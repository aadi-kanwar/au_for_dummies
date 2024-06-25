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
      { text: 'Useful Links', link: '/links.md' },
      {
        text: 'Academics',
        items: [
          { text: 'Schools/Colleges', link: '/schools.md'}
        ]
      },
      {
        text: 'Campus Life',
        items: [
          { text: 'DoSSS', link: '/dosss.md'},
          { text: 'Clubs', link: '/clubs.md'},
          { text: 'Library', link: '/library.md'},
          { text: 'Cafeterias', link: '/cafeteria.md'},
          { text: 'Sports', link: '/sports.md'},
          { text: 'Gallery', link: '/gallery.md'},
        ]
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Contact Us', link: '/contact.md'},
          { text: 'Creator', link: '/me.md'}
        ]
      }
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
          { text: 'Schools/College', link: '/schools.md' },
        ]
      },
      {
        text: 'Campus Life',
        items: [
          { text: 'DoSSS', link: '/dosss.md' },
          { text: 'Clubs', link: '/clubs.md' },
          { text: 'Library', link: '/library.md' },
          { text: 'Cafeterias', link: '/cafeteria.md' },
          { text: 'Sports', link: '/sports.md'},
          { text: 'Gallery', link: '/gallery.md' },
        ]
      },
      {
        text: 'Miscellaneous',

        items: [
          { text: 'Contact Us', link: '/contact.md' },
          { text: 'Creator', link: '/me.md'}
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
