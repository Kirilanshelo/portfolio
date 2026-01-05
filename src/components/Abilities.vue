<template>
  <div id="skills" :class="`skills-${theme}`">
    <h2 :class="`subtitle-${theme} atkinson-hyperlegible-bold`">My Abilities</h2>
    <div class="row exp-row">
      <div class="col-lg-2 col-0"></div>
      <div class="col-lg-8 col-12 ab-section">
        
        <!-- Expert Level -->
        <div class="skill-category">
          <h3 :class="`category-title-${theme}`">I'm good at</h3>
          <div class="skills-cards">
            <div 
              v-for="skill in goodSkills" 
              :key="skill.name"
              :class="`skill-card skill-card-${theme}`"
              :title="skill.name"
            >
              <img :src="skill.icon" :alt="skill.name" class="skill-icon">
              <span class="skill-label">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Familiar Level -->
        <div class="skill-category">
          <h3 :class="`category-title-${theme}`">I'm familiar with</h3>
          <div class="skills-cards">
            <div 
              v-for="skill in familiarSkills" 
              :key="skill.name"
              :class="`skill-card skill-card-${theme}`"
              :title="skill.name"
            >
              <img :src="skill.icon" :alt="skill.name" class="skill-icon">
              <span class="skill-label">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <hr class="line-break"/>

<!-- Languages Section -->
        <div class="skill-category">
          <h3 :class="`category-title-${theme}`">Languages</h3>
          <div class="languages-list">
            <div 
              v-for="lang in allLanguages" 
              :key="lang.name"
              class="language-item"
            >
              <div class="language-info">
                <h4 :class="`language-name-${theme}`">{{ lang.name }}</h4>
                <p :class="`language-proficiency-${theme}`">{{ lang.proficiency }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-lg-2 col-0"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

// Icone da CDN (Simple Icons o DevIcons)
const goodSkills = ref([
  { 
    name: 'Javascript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  { 
    name: 'PostgreSQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  { 
    name: 'Kafka', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg'
  },

  { 
    name: 'Elasticsearch', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg'
  },
  { 
    name: 'MongoDB', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  }
])

const familiarSkills = ref([
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    name: 'Vue.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  { 
    name: 'Bootstrap', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
    { 
    name: 'CSS3', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  { 
    name: 'HTML5', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  { 
    name: 'Kubernetes', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
  },
])

const allLanguages = ref([
  { name: 'Italian', proficiency: 'Native speaker', flag: '🇮🇹' },
  { name: 'English', proficiency: 'Fluent in writing, good in listening and speaking', flag: '🇬🇧' }
])
</script>

<style scoped>
.skill-category {
  margin: 3rem 0;
}

.category-title-light {
  font-size: 1.8rem;
  color: #CE1212;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.category-title-dark {
  font-size: 1.8rem;
  color: #10A19D;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.skills-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 120px;
  height: 140px;
}

.skill-card-light {
  background-color: #fff;
  border: 2px solid #e0e0e0;
}

.skill-card-dark {
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.skill-card-light:hover {
  border-color: #CE1212;
}

.skill-card-dark:hover {
  border-color: #10A19D;
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 0.75rem;
  object-fit: contain;
}

.skill-label {
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}

/* Languages Section - Different layout */
.languages-list {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex: 1;
  min-width: 250px;
}

.language-flag {
  font-size: 3.5rem;
  flex-shrink: 0;
}

.language-info {
  text-align: left;
  flex: 1;
}

.language-name-light,
.language-name-dark {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.language-name-light {
  color: #000;
}

.language-name-dark {
  color: #fff;
}

.language-proficiency-light,
.language-proficiency-dark {
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.language-proficiency-light {
  color: #666;
}

.language-proficiency-dark {
  color: #ccc;
}

@media (max-width: 768px) {
  .skills-cards {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skill-card {
    min-width: 100px;
    height: 120px;
    padding: 1rem;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .languages-list {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .language-item {
    min-width: auto;
  }
  
  .language-info {
    text-align: center;
  }
  
  .language-flag {
    font-size: 2.5rem;
  }

  .language-name-light,
  .language-name-dark {
    font-size: 1.2rem;
  }

  .language-proficiency-light,
  .language-proficiency-dark {
    font-size: 0.9rem;
  }
}
</style>