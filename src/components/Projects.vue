<template>
  <section id="projects">
    <h2>Selected Projects</h2>
    <div class="grid projects">
      <article class="card" v-for="p in projects" :key="p.title">
        <h3>{{ p.title }}</h3>
        <p class="muted">{{ p.subtitle }}</p>
        <p>{{ p.description }}</p>
        <ul v-if="p.highlights" class="highlights">
          <li v-for="h in p.highlights" :key="h">• {{ h }}</li>
        </ul>
        <div class="card-footer">
          <a :href="p.live" target="_blank" rel="noopener">Live</a>
          <a :href="p.repo" target="_blank" rel="noopener">Code</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ projects: Array })
const { projects } = props
</script>
