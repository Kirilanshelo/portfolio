<template>
  <div class="theme-button">
    <BFormCheckbox
      switch
      :model-value="theme === 'dark'"
      @update:model-value="handleToggleTheme"
    />
    <font-awesome-icon 
      :class="`icon-${theme}`" 
      :icon="theme === 'dark' ? ['fas', 'moon'] : ['fas', 'sun']" 
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { BFormCheckbox } from 'bootstrap-vue-next'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

function handleToggleTheme() {
  themeStore.toggleTheme()
}
</script>
