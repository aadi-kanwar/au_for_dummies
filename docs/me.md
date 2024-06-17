---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'me.jpg',
    name: 'Aadi Kanwar',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/aadi-kanwar' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/aadi-kanwar-b94891262/' },
      { icon: 'instagram', link: 'https://www.instagram.com/_a.k.4.6_/'},
      { icon: 'discord', link: 'https://discordapp.com/users/a.k.4.6'}
    ]
  },
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Hi 👋
    </template>
    <template #lead>
      I am glad that you are here! I hope you like browsing through AU-topia.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

