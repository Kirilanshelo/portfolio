<template>
  <div id="getintouch" class="contact-me">
    <h2 :class="`subtitle-${theme}`">Get In Touch</h2>
    <p>Contact me for further information</p>
    <BButton 
      variant="danger" 
      :class="`btn-${theme}`" 
      href="mailto:enrico.montanari13@gmail.com"
    >
      CONTACT ME
    </BButton>
  </div>

  <a :class="`footer-link-${theme}`" href="https://www.linkedin.com/in/EnricoMontanari13/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a :class="`footer-link-${theme}`" href="https://github.com/Kirilanshelo" target="_blank" rel="noopener noreferrer">Github</a>
  <p :class="`credits-${theme}`">© 2022 Enrico Montanari.</p>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { BButton } from 'bootstrap-vue-next'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>
