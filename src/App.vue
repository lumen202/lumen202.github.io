<template>
  <div>
    <SiteHeader :section="section" @navigate="section = $event"/>
  <main class="container main">
  <About :name="name" :summary="summary"/>
  <Skills :skills="skills" :tech="tech"/>
  <Projects :projects="projects"/>
    <Contact :contact="contact"/>
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

const summary = `Full-stack developer with experience building backend APIs, relational databases, and responsive frontends. Skilled with Laravel & MySQL on the server-side, Vue for client apps, and Java/JavaFX for desktop tooling. I focus on clean architecture, testability, and production-ready deployments.`

const skills = [
  {
    category: 'Backend',
    items: [
      'Laravel (Eloquent, Middleware, Auth)',
      'RESTful API design',
      'MySQL / query optimization',
      'Server-side testing & validation'
    ]
  },
  {
    category: 'Frontend',
    items: [
      'Vue 3 (Composition API)',
      'Responsive, accessible UI',
      'Vite / SPA performance',
      'Component-driven architecture'
    ]
  },
  {
    category: 'Tools & Infra',
    items: [
      'Docker / containerization',
    'CI / Automation',
      'Pusher (real-time)',
      'Debugging, logging, and observability'
    ]
  }
]

const tech = [
  'Laravel', 'MySQL', 'Vue 3', 'Vite', 'PHP', 'Docker', 'CI', 'Java', 'JavaFX', 'Eloquent ORM', 'Pusher'
]

const projects = [
  {
    title: 'SMS Student Client',
    subtitle: 'Desktop Client — Java, JavaFX, MySQL',
    description: 'Production-quality desktop client for the Student Management System. Built with Java and JavaFX for a responsive, native-like experience. Designed for reliability in low-connectivity environments with local caching and secure synchronization to the central MySQL-backed service.',
    live: '#',
    repo: 'https://github.com/lumen202/sms-student',
    group: 'SMS',
    highlights: [
      'Offline-first architecture with conflict-safe sync to central MySQL',
      'Secure authentication, encrypted local cache, and client-side validation',
      'Responsive JavaFX UI with accessibility and keyboard workflows',
      'Unit and integration tests; build artifacts packaged for distribution'
    ]
  },
  {
    title: 'SMS Admin Console',
    subtitle: 'Admin Console — Java, JavaFX, MySQL',
    description: 'A dedicated administrative desktop console for managing students, schedules, and reports. The console integrates directly with the central MySQL datastore and provides role-based access, audit trails, bulk operations, and exportable reports for institutional workflows.',
    live: '#',
    repo: 'https://github.com/lumen202/sms_admin',
    group: 'SMS',
    highlights: [
      'Role-based access control, audit logging, and secure admin flows',
      'Advanced reporting (CSV/PDF) and scheduled exports',
      'Bulk imports/exports, transaction-safe data operations, and backups',
      'Designed for enterprise workflows and large datasets'
    ]
  },
  {
    title: 'Scheduling System',
    subtitle: 'Scheduling Platform — Laravel API, Vue SPA',
    description: 'A commercial-grade scheduling platform offering secure user access, searchable availability, and scalable scheduling APIs. Built with Laravel for the backend and a Vue SPA for the admin/user UI; includes production practices like containerized development, automated testing and CI-driven releases.',
    live: '#',
    repo: '#',
    highlights: [
      'JWT authentication and role-based access control',
      'Efficient database queries, server-side pagination, and indexing',
      'Dockerized development environment and CI-driven build/release pipeline'
    ]
  }
]

const contact = {
  email: 'jdiniega202@gmail.com',
  linkedin: 'https://www.linkedin.com/',
  location: 'Remote / Open to relocation'
}
</script>
