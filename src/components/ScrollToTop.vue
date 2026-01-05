<template>
  <transition name="fade">
    <button
      v-if="showButton"
      @click="scrollToTop"
      :class="`scroll-to-top scroll-to-top-${theme}`"
      aria-label="Scroll to top"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </button>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

const showButton = ref(false)

const handleScroll = () => {
  // Mostra il bottone dopo 300px di scroll
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.scroll-to-top-light {
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: #000;
}

.scroll-to-top-dark {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
}

.scroll-to-top-light:hover {
  background-color: rgba(255, 255, 255, 0.5);
  border-color: rgba(0, 0, 0, 0.3);
}

.scroll-to-top-dark:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.scroll-to-top:active {
  transform: translateY(-1px);
}

/* Animazione fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>