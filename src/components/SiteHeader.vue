<template>
  <header class="site-header">
    <div class="container">
      <div class="profile">
        <div class="avatar" aria-hidden="true">JD</div>
        <div class="profile-meta">
          <h1 class="brand">Joshua Diniega</h1>
          <p class="role">Full‑stack developer — Laravel, Vue, Java</p>
        </div>
      </div>
      <nav class="nav">
        <button @click.prevent="scrollTo('about')" :class="{active: section==='about'}">About</button>
  <button @click.prevent="scrollTo('skills')" :class="{active: section==='skills'}">Skills</button>
  <button @click.prevent="scrollTo('projects')" :class="{active: section==='projects'}">Projects</button>
        <button @click.prevent="scrollTo('contact')" :class="{active: section==='contact'}">Contact</button>
        <a class="resume" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
      </nav>
    </div>
  </header>
</template>

<script setup>

import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({ section: String })
const emit = defineEmits(['navigate'])

function scrollTo(id){
  const el = document.getElementById(id)
  if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // update active state immediately so very short sections (like About) become selected
  emit('navigate', id)
}

let observer
onMounted(()=>{
  const sections = document.querySelectorAll('main.container.main > section')
  observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const id = e.target.id || ''
        if(id) emit('navigate', id)
      }
    })
  },{ root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 })
  sections.forEach(s=>observer.observe(s))
})

onBeforeUnmount(()=>{
  if(observer) observer.disconnect()
})
</script>
