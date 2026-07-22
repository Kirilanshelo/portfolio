<template>
  <div id="aboutme" :class="`profile-${theme}`">
    <h2 :class="`subtitle-${theme} atkinson-hyperlegible-bold`">Hello.</h2>
    <p :class="`intro-${theme}`">{{ about }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { about } from '@/data/resume'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>
