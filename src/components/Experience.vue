<template>
  <div id="experience" :class="`experience-${theme}`">
    <h2 :class="`subtitle-${theme} atkinson-hyperlegible-bold`">Experiences</h2>
    <div class="row exp-row">
      <div class="col-md-3 col-0"></div>
      <div class="col-md-6 col-12 exp-section">

        <!-- Career Section -->
        <div class="row">
          <div class="col-md-4">
            <h3 :class="`section-title-${theme}`">Career</h3>
          </div>
          <div class="col-md-8"></div>
        </div>
        
        <div 
          v-for="job in career" 
          :key="job.company" 
          class="row exp-row exp-section"
        >
          <div class="col-md-4">
            <h4 class="section-subtitle">{{ job.company }}</h4>
            <p class="exp-subtit"><i>{{ job.period }}</i></p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col">
                <h5>{{ job.role }}</h5>
                <p class="edu-desc">{{ job.description }}</p>
                <p v-if="job.tasks" class="edu-desc">My day to day tasks are:</p>
                <ul v-if="job.tasks" :class="`list-group-${theme}`">
                  <li 
                    v-for="task in job.tasks" 
                    :key="task" 
                    class="list-group-item borderless"
                  >
                    <p class="edu-desc">- {{ task }}</p>
                  </li>
                </ul>
                <p v-if="job.technologies" class="edu-desc"><strong>Technologies used:</strong> {{ job.technologies }}</p>
              </div>
            </div>
          </div>
        </div>

        <hr class="line-break"/>

        <!-- Education Section -->
        <div class="row">
          <div class="col-md-4">
            <h3 :class="`section-title-${theme}`">Education</h3>
          </div>
          <div class="col-md-8"></div>
        </div>
        
        <div 
          v-for="edu in education" 
          :key="edu.degree" 
          class="row exp-row exp-section"
        >
          <div class="col-md-4">
            <h4 class="section-subtitle">{{ edu.institution }}</h4>
            <p class="exp-subtit"><i>{{ edu.period }}</i></p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col">
                <h5>{{ edu.degree }}</h5>
                <p class="edu-desc">
                  {{ edu.description }}
                  <a 
                    v-if="edu.link" 
                    :class="`emph-name-${theme}`" 
                    :href="edu.link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Here
                  </a>
                  {{ edu.linkText }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr class="line-break"/>

        <!-- Online Courses Section -->
        <div class="row">
          <div class="col-md-4">
            <h3 :class="`section-title-${theme}`">Online Courses</h3>
          </div>
          <div class="col-md-8"></div>
        </div>
        
        <div 
          v-for="(course, index) in onlineCourses" 
          :key="course.title" 
          class="row exp-row exp-section"
        >
          <div class="col-md-4">
            <h4 class="section-subtitle">{{ course.title }}</h4>
            <p class="exp-subtit"><i>{{ course.period }}</i></p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col">
                <h5 class="course-link-centered">
                  <a 
                    :class="`emph-name-${theme}`" 
                    :href="course.link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Udemy
                  </a>
                </h5>
                
                <!-- Toggle button per mobile -->
                <div class="description-toggle mobile-only">
                  <button 
                    class="toggle-btn"
                    @click="toggleCourseDescription(index)"
                    :aria-label="expandedCourses[index] ? 'Hide description' : 'Show description'"
                  >
                    <font-awesome-icon 
                      :icon="['fas', expandedCourses[index] ? 'chevron-up' : 'chevron-down']" 
                    />
                    <span class="description-label">Description</span>
                  </button>
                </div>

                <p 
                  class="edu-desc course-description"
                  :class="{ 'show-mobile': expandedCourses[index] }"
                >
                  {{ course.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-3 col-0"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

const career = ref([
  {
    company: 'fabbricadigitale s.r.l.',
    period: 'Sept 2021 - Present',
    role: 'Software Developer',
    description: 'My tasks are mainly focused on the backend side of a software for digital signage. Since the advent of AI, we are also integrating it in our day to day coding tasks.',
    // tasks: [
    //   'Define and document software requirements and specification together with my colleagues',
    //   'Develop and maintain about 15 Node.js/Typescript microservices',
    //   'Improve test coverage and bug fixing',
    //   'CI/CD'
    // ],
    technologies: 'Node.js, Typescript, Kafka, MQTT, PostgreSQL, Redis, Kubernetes, Piscina'
  },
  {
    company: 'Serenissima Informatica Spa',
    period: 'Apr 2019 - Aug 2021',
    role: 'Full-Stack Developer',
    description: 'Full-Stack developer mainly working on a multi-tenant cloud platform for hotels, structured with Node.js microservices and a React frontend.'
  }
])

const education = ref([
  {
    institution: 'Università di Padova',
    period: 'Oct 2016 - Mar 2019',
    degree: "Master's Degree: Astronomy",
    description: 'Final mark 110/110 with a thesis about how the stellar rotation influences black hole formation. ',
    link: 'https://arxiv.org/abs/1909.01371',
    linkText: ' you can read the published article.'
  },
  {
    institution: 'Università di Padova',
    period: 'Oct 2009 - Mar 2016',
    degree: "Bachelor's Degree: Astronomy",
    description: 'Many courses about physics, math, quantum mechanic, geometry and computer.'
  }
])

const onlineCourses = ref([
    {
    title: 'The Complete Python Developer',
    period: "Sept '25 - Oct '25",
    link: 'https://www.udemy.com/course/the-complete-python-developer-zero-to-mastery/',
    description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games'
  },
    {
    title: 'JavaScript: The Advanced Concepts (2023 Update)',
    period: "Nov '22",
    link: 'https://www.udemy.com/course/advanced-javascript-concepts/',
    description: 'Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers'
  },
    {
    title: 'JavaScript Algorithms and Data Structures Masterclass',
    period: "Aug '22 - Oct '22",
    link: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
    description: 'The Missing Computer Science and Coding Interview Bootcamp'
  },
    {
    title: 'Kubernetes for the Absolute Beginners - Hands-on',
    period: "Aug '22",
    link: 'https://www.udemy.com/course/learn-kubernetes/',
    description: 'Learn Kubernetes in simple, easy and fun way with hands-on coding exercises. For beginners in DevOps.'
  },
  {
    title: 'The Complete Development Bootcamp',
    period: "Jul '21",
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    description: 'Introduction and basic usage of HTML, CSS, Javascript, Node, React, MongoDB'
  },
])

// State per tracciare quali corsi sono espansi
const expandedCourses = reactive({})

const toggleCourseDescription = (index) => {
  expandedCourses[index] = !expandedCourses[index]
}
</script>

<style scoped>
.course-link-centered {
  text-align: left;
}

.description-toggle {
  display: none;
  text-align: center;
  margin: 1rem 0;
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.toggle-btn:hover {
  opacity: 0.7;
}

.description-label {
  font-weight: 500;
}

.course-description {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.exp-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
}

/* Mobile only styles */
@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }

  .course-link-centered {
    text-align: center;
  }

  .course-description {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    margin-top: 0;
  }

  .course-description.show-mobile {
    max-height: 500px;
    opacity: 1;
    margin-top: 0.5rem;
  }
}

/* Desktop: sempre visibile */
@media (min-width: 769px) {
  .course-description {
    display: block !important;
    max-height: none !important;
    opacity: 1 !important;
  }
}
</style>