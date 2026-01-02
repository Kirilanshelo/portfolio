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
                  <span :class="`skill-badge ${getSkillLevelClass(skill.level)}`">
                    {{ getSkillLevelText(skill.level) }}
                  </span>
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
                  <span :class="`skill-badge ${getSkillLevelClass(lang.level)}`">
                    {{ getSkillLevelText(lang.level) }}
                  </span>
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

// Funzione per determinare il testo del livello
const getSkillLevelText = (level) => {
  if (level < 50) return 'Basic'
  if (level < 70) return 'Average'
  return 'Good'
}

// Funzione per determinare la classe CSS del badge
const getSkillLevelClass = (level) => {
  if (level < 50) return 'skill-basic'
  if (level < 70) return 'skill-average'
  return 'skill-good'
}
</script>

<style scoped>
.skill-item {
  padding: 0.75rem 0;
}

.skill-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem; /* Spazio fisso tra nome e badge */
}

.skill-name {
  font-weight: 500;
}

.skill-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-basic {
  background-color: #FFC107;
  color: #000;
}

.skill-average {
  background-color: #2196F3;
  color: #fff;
}

.skill-good {
  background-color: #4CAF50;
  color: #fff;
}

/* Grid layout: 2 colonne su desktop, 1 su mobile */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>