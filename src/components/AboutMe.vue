<template>
  <div id="aboutme" :class="`profile-${theme}`">
    <h2 :class="`subtitle-${theme} atkinson-hyperlegible-bold`">Hello.</h2>
    <p :class="`intro-${theme}`">
      Astrophysicist by training, software developer by passion.
      I used to study the stars, now I mostly stare at code, and honestly I love it.
      These days I build backend systems and distributed services, and I get a real kick out of turning messy problems into something clean and reliable.
      I'm endlessly curious, always poking at new tools and ideas, and I do my best work on a team where we can build cool things and grow together.
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>
