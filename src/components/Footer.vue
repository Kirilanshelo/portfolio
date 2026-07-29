<template>
  <div id="getintouch" class="contact-me">
    <h2 :class="`category-title-${theme} atkinson-hyperlegible-bold`">Contact me for further information</h2>
    <p></p>
    <BButton 
      variant="danger" 
      :class="`btn-${theme}`" 
      :href="`mailto:${contacts.email}`"
    >
      GET IN TOUCH
    </BButton>
    <BButton 
      variant="danger" 
      :class="`btn-${theme}`" 
      @click="downloadCv"
    >
      DOWNLOAD CV
    </BButton>
  </div>

  <div class="social-links">
    <a 
      :class="`footer-link-${theme}`" 
      :href="contacts.linkedin" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
    </a>
    <a 
      :class="`footer-link-${theme}`" 
      :href="contacts.github" 
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
import { contacts } from '@/data/resume'
import { generateResumePdf } from '@/utils/generateResumePdf'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

const downloadCv = async () => {
  try {
    await generateResumePdf()
  } catch (err) {
    console.error('CV generation failed:', err)
  }
}
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