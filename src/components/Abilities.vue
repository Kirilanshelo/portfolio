<template>
  <div id="skills" :class="`skills-${theme}`">
    <h2 :class="`subtitle-${theme}`">My Abilities</h2>
    <div class="row exp-row">
      <div class="col-lg-3 col-0"></div>
      <div class="col-lg-6 col-12 ab-section">
        <!-- Skills Section -->
        <div class="row">
          <div class="col-12">
            <h3 class="section-title">Skills</h3>
          </div>
        </div>
        
        <div class="row exp-row">
          <div class="col-12">
            <ul :class="`list-group-${theme} skills-grid`">
              <li 
                v-for="skill in allSkills" 
                :key="skill.name" 
                class="list-group-item borderless skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <!-- <span class="skill-percentage">{{ skill.level }}%</span> -->
                </div>
                <div class="skill-bar-container">
                  <div 
                    :class="`skill-bar-fill-${theme}`" 
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr class="line-break"/>

        <!-- Languages Section -->
        <div class="row">
          <div class="col-12">
            <h3 class="section-title">Languages</h3>
          </div>
        </div>
        
        <div class="row exp-row">
          <div class="col-12">
            <ul :class="`list-group-${theme} skills-grid`">
              <li 
                v-for="lang in allLanguages" 
                :key="lang.name" 
                class="list-group-item borderless skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ lang.name }}</span>
                  <!-- <span class="skill-percentage">{{ lang.level }}%</span> -->
                </div>
                <div class="skill-bar-container">
                  <div 
                    :class="`skill-bar-fill-${theme}`" 
                    :style="{ width: lang.level + '%' }"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-0"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

// Lista unificata di tutte le skill
const allSkills = ref([
  { name: 'Javascript', level: 80 },
  { name: 'Node.js', level: 80 },
  { name: 'Typescript', level: 80 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'Kafka', level: 60 },
  { name: 'HTML (5)', level: 60 },
  { name: 'Elasticsearch', level: 50 },
  { name: 'MongoDB', level: 50 },
  { name: 'CSS (3)', level: 40 },
  { name: 'React', level: 40 },
  { name: 'Vue.js', level: 40 },
  { name: 'Bootstrap (4)', level: 40 },
  { name: 'React-native', level: 40 },
  { name: 'Kubernetes', level: 30 }
])

// Lista unificata di tutte le lingue
const allLanguages = ref([
  { name: 'Italian', level: 100 },
  { name: 'English', level: 80 },
])
</script>

<style scoped>
.skill-item {
  padding: 0.75rem 0;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
}

.skill-percentage {
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.8;
}

.skill-bar-container {
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-bar-fill-light {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%);
  border-radius: 4px;
  transition: width 0.6s ease;
}

.skill-bar-fill-dark {
  height: 100%;
  background: linear-gradient(90deg, #2196F3 0%, #64B5F6 100%);
  border-radius: 4px;
  transition: width 0.6s ease;
}

/* Grid layout: 2 colonne su desktop, 1 su mobile */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>