<template>
  <div id="experience" :class="`experience-${theme}`">
    <h2 :class="`subtitle-${theme}`">Experiences</h2>
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
          v-for="course in onlineCourses" 
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
                <h5>
                  <a 
                    :class="`emph-name-${theme}`" 
                    :href="course.link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Udemy
                  </a>
                </h5>
                <p class="edu-desc">{{ course.description }}</p>
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
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

const career = ref([
  {
    company: 'fabbricadigitale s.r.l.',
    period: 'Sept 2021 - Present',
    role: 'Software Developer',
    description: 'My tasks are mainly focused on the backend side of a software for digital signage. Since the advent of AI, we are also integrating it in our day to day coding tasks.',
    tasks: [
      'Define and document software requirements and specification together with my colleagues',
      'Develop and maintain about 15 Node.js/Typescript microservices',
      'Improve test coverage and bug fixing',
      'CI/CD'
    ],
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
    title: 'The Complete Development Bootcamp',
    period: 'Jul 2021',
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    description: 'HTML, CSS, Javascript, Node, React, MongoDB'
  },
  {
    title: 'JavaScript: The Advanced Concepts (2023 Update)',
    period: 'Nov 2022',
    link: 'https://www.udemy.com/course/advanced-javascript-concepts/',
    description: 'Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers'
  },
  {
    title: 'Kubernetes for the Absolute Beginners - Hands-on',
    period: 'Aug 2022',
    link: 'https://www.udemy.com/course/learn-kubernetes/',
    description: 'Learn Kubernetes in simple, easy and fun way with hands-on coding exercises. For beginners in DevOps.'
  },
  {
    title: 'JavaScript Algorithms and Data Structures Masterclass',
    period: "Aug '22 - present",
    link: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
    description: 'The Missing Computer Science and Coding Interview Bootcamp'
  }
])
</script>
