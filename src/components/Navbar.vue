<template>
  <div class="horizontal-nav">
    <BContainer :class="`navbar-${theme}`">
      <BNavbar toggleable="sm" class="navbar">
        <BContainer>
          <BNavbarToggle 
            :class="`background-${theme}`" 
            target="responsive-navbar-nav"
          />
          <BCollapse id="responsive-navbar-nav" is-nav>
            <BNavbarNav>
              <BNavItem>
                <a :class="theme" href="#aboutme">About Me</a>
              </BNavItem>
              <BNavItem>
                <a :class="theme" href="#experience">Experiences</a>
              </BNavItem>
              <BNavItem>
                <a :class="theme" href="#skills">Abilities</a>
              </BNavItem>
              <BNavItem>
                <a :class="theme" href="#getintouch">Get in touch</a>
              </BNavItem>
            </BNavbarNav>
          </BCollapse>
        </BContainer>
      </BNavbar>
    </BContainer>
    <ThemeButton />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { 
  BContainer, 
  BNavbar, 
  BNavbarToggle, 
  BCollapse, 
  BNavbarNav, 
  BNavItem
} from 'bootstrap-vue-next'
import ThemeButton from './ThemeButton.vue'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
</script>
