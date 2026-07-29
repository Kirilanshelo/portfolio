<template>
  <div id="projects" :class="`projects-${theme}`">
    <h2 :class="`subtitle-${theme} atkinson-hyperlegible-bold`">My Projects</h2>

    <div class="projects-list">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="row align-items-center project-row"
      >
        <!-- Screenshot: alternates side on large screens, stacks on top when narrow -->
        <div
          class="col-lg-6 project-media"
          :class="index % 2 === 1 ? 'order-lg-2' : 'order-lg-1'"
        >
          <img
            v-if="project.image && !errored.has(project.title)"
            :src="resolveAsset(project.image)"
            :alt="`${project.title} preview`"
            class="project-img"
            loading="lazy"
            @error="errored.add(project.title)"
          />
          <div v-else :class="`project-placeholder project-placeholder-${theme}`">
            <span>{{ project.title }}</span>
          </div>
        </div>

        <!-- Title + description (+ optional link) -->
        <div
          class="col-lg-6 project-content"
          :class="index % 2 === 1 ? 'order-lg-1' : 'order-lg-2'"
        >
          <h3 :class="`section-title-${theme}`">{{ project.title }}</h3>
          <p :class="`project-desc-${theme}`">{{ project.description }}</p>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`btn-${theme}`"
          >
            View project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { projects } from '@/data/projects'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

const base = import.meta.env.BASE_URL || '/'
const resolveAsset = (path) => `${base}${path.replace(/^\//, '')}`

// Tracks screenshots that failed to load so we can show a placeholder instead.
const errored = reactive(new Set())
</script>

<style scoped>
.projects-list {
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 5%;
}

.project-row {
  margin: 4rem 0;
}

.project-img {
  width: 100%;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  display: block;
}

.project-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
}

.project-placeholder-light {
  background: rgba(0, 0, 0, 0.06);
  border: 2px dashed rgba(0, 0, 0, 0.25);
  color: #333;
}

.project-placeholder-dark {
  background: rgba(255, 255, 255, 0.06);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  color: #ddd;
}

.project-content {
  text-align: left;
  padding: 1rem 1.5rem;
}

.project-content h3 {
  margin-bottom: 1rem;
}

.project-desc-light,
.project-desc-dark {
  font-size: 1.15rem;
  line-height: 1.9;
}

.project-desc-light {
  color: #000;
}

.project-desc-dark {
  color: #eee;
}

@media (max-width: 992px) {
  .project-content {
    text-align: center;
    padding: 1.5rem 0;
  }

  .project-row {
    margin: 2.5rem 0;
  }
}
</style>
