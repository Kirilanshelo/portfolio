<template>
  <div id="aboutme" :class="`profile-${theme}`">
    <h2 :class="`subtitle-${theme} atkinson-hyperlegible-bold`">Hello.</h2>
    <p :class="`intro-${theme}`">
      I studied to be an astrophysicist, but eventually became a software developer.
      I'm eager to learn new things, curiosity drives me to explore different fields and technologies. 
      I would like to be part of a team where I can contribute, grow, both personally and professionally, and make a difference.
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>
