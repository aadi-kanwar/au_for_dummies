import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AU-topia",
  description: "A guide to your new home",
  themeConfig: {
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/440px-Alliance_University_Icon.svg.png',
    siteTitle: 'Alliance University',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index.md' },
      { text: 'Useful Links', link: '/' }
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
