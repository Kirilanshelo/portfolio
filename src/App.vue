<template>
  <div class="App atkinson-hyperlegible-regular">
    <div :class="`top-container-${theme}`">
      <Navbar />
      <Header />
    </div>
    <div class="middle-container">
      <AboutMe />
      <Experience />
      <Abilities />
    </div>
    <div :class="`top-container-${theme}`">
      <Footer />
    </div>
    <ScrollToTop />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'
import Abilities from './components/Abilities.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>

<style>
@import './App.css';
</style>
