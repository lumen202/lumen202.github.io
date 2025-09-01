<template>
  <header class="site-header">
    <div class="container">
      <h1 class="brand">Joshua Diniega</h1>
      <nav class="nav">
        <button @click="$emit('navigate','about')" :class="{active: section==='about'}">About</button>
        <button @click="$emit('navigate','projects')" :class="{active: section==='projects'}">Projects</button>
        <button @click="$emit('navigate','skills')" :class="{active: section==='skills'}">Skills</button>
        <button @click="$emit('navigate','contact')" :class="{active: section==='contact'}">Contact</button>
  <a class="resume" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({ section: String })
</script>
