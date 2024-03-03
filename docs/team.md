<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/ayushsehrawat.png',
    name: 'Ayush Sehrawat',
    title: 'Core Team',
    sponsor: 'https://paypal.me/mini5183',
    links: [
      { icon: 'github', link: 'https://github.com/ayushsehrawat' },
      { icon: 'twitter', link: 'https://twitter.com/mini5183' }
    ]
  },
  {
    avatar: "https://github.com/pukabyte.png",
    name: "Pukabyte",
    title: "Core Team",
    sponsor: "https://paypal.me/pukabyte",
    links: [
      { icon: "github", link: "https://github.com/pukabyte" },
    ]
  }
]
</script>

# Contributors

This project exists thanks to all the people who contribute.

<VPTeamMembers size="small" :members="members" />