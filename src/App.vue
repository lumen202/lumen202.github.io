<template>
  <div>
    <SiteHeader :section="section" @navigate="section = $event"/>
    <main class="container main">
        <About v-if="section==='about'" :name="name" :summary="summary"/>
        <Tech v-if="section==='skills'" :tech="tech"/>
        <Projects v-if="section==='projects'" :projects="projects"/>
        <Skills v-if="section==='skills'" :skills="skills"/>
        <Contact v-if="section==='contact'" :contact="contact"/>
    </main>
    <footer class="site-footer">
      <div class="container">
        <small>&copy; {{ new Date().getFullYear() }} {{ name }} — Built with Vue</small>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Tech from './components/Tech.vue'

const name = 'Joshua Diniega'
const section = ref('about')

const summary = `Full‑stack developer skilled in Laravel, Vue, and Java. I build maintainable REST APIs, performant SPAs, and desktop tools — emphasis on testability, documentation, and production‑ready deployments.`

const skills = [
  'Laravel / PHP',
  'Vue 3 (Composition API)',
  'Java / JavaFX',
  'RESTful APIs',
  'SQL / Eloquent ORM',
  'Docker / CI (GitHub Actions)'
]

const tech = [
  'Laravel', 'Vue 3', 'Vite', 'PHP', 'MySQL', 'Postgres', 'Docker', 'GitHub Actions', 'Java', 'JavaFX'
]

const projects = [
  {
    title: 'JobBoard (example)',
    subtitle: 'Laravel API • Vue SPA • Docker • CI',
    description: 'Full‑stack job board: authenticated Laravel API, searchable listings, and a Vue SPA with server‑side pagination. Includes Dockerfile, tests, and CI release workflow.',
    live: '#',
    repo: '#',
    highlights: [
      'JWT auth & role-based access',
      'Efficient DB queries and pagination',
      'Dockerized dev + CI for automated builds'
    ]
  }
]

const contact = {
  email: 'joshua@example.com',
  linkedin: 'https://www.linkedin.com/',
  location: 'Remote / Open to relocation'
}
</script>
