<template>
  <div>
    <SiteHeader :section="section" @navigate="section = $event"/>
    <main class="container main">
      <About v-if="section==='about'" :name="name" :summary="summary"/>
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

const name = 'Joshua Diniega'
const section = ref('about')

const summary = `I build performant and accessible web interfaces with a focus on clean code, component-driven architecture, and user experience. I'm seeking frontend/web development roles where I can contribute to product quality and iterate quickly.`

const skills = [
  'HTML5 & Semantic Markup',
  'CSS3 — Flexbox & Grid',
  'JavaScript (ES6+)',
  'Vue 3 (Composition API)',
  'Responsive & Accessible UI',
  'Version Control (Git)',
]

const projects = [
  {
    title: 'Portfolio Demo',
    subtitle: 'Static site — Vue (Vite)',
    description: 'A polished, responsive portfolio showcasing projects, skills and contact details.',
    live: '#',
    repo: '#'
  },
  {
    title: 'Todo App',
    subtitle: 'Vue + Local Storage',
    description: 'Demonstrating component design, local persistence and keyboard accessibility.',
    live: '#',
    repo: '#'
  }
]

const contact = {
  email: 'joshua@example.com',
  linkedin: 'https://www.linkedin.com/',
  location: 'Remote / Open to relocation'
}
</script>
