<template>
  <div>
    <div>
      <h1 :class="`title-name-${theme}`">
        I'm <span :class="`emph-name-${theme}`">Enrico</span>
      </h1>
    </div>
  </div>
  <div>
    <div>
      <div>
        <BImg 
          rounded="circle" 
          class="img-profile" 
          :src="enricoImage" 
          alt="Enrico profile picture"
        />
      </div>
    </div>
  </div>
  <div>
    <div>
      <h2 :class="`subtitle-${theme}`" id="subtitle">a developer.</h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { BImg } from 'bootstrap-vue-next'
import enricoImage from '@/assets/enrico-sunglasses.jpg'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>
