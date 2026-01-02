import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const theme = ref(
    window.localStorage.getItem('theme') || 'light'
  )

  // Actions
  function setTheme(newTheme) {
    theme.value = newTheme
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // Watch per sincronizzazione con localStorage
  watch(theme, (newTheme) => {
    window.localStorage.setItem('theme', newTheme)
  })

  return {
    theme,
    setTheme,
    toggleTheme
  }
})
