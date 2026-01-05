<template>
  <div id="getintouch" class="contact-me">
    <h2 :class="`category-title-${theme} atkinson-hyperlegible-bold`">Contact me for further information</h2>
    <p></p>
    <BButton 
      variant="danger" 
      :class="`btn-${theme}`" 
      href="mailto:enrico.montanari13@gmail.com"
    >
      GET IN TOUCH
    </BButton>
  </div>

  <div class="social-links">
    <a 
      :class="`footer-link-${theme}`" 
      href="https://www.linkedin.com/in/EnricoMontanari13/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
    </a>
    <a 
      :class="`footer-link-${theme}`" 
      href="https://github.com/Kirilanshelo" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Github"
    >
      <font-awesome-icon :icon="['fab', 'github']" size="2x" />
    </a>
  </div>
  
  <p :class="`credits-${theme}`">© 2026 Enrico Montanari.</p>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { BButton } from 'bootstrap-vue-next'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.social-links a {
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: scale(1.2);
}
</style>