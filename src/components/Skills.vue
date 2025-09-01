<template>
  <section id="skills">
    <h2>Skills</h2>
    <div class="skill-groups">
      <div class="skill-group" v-for="group in skills" :key="group.category">
        <h3 class="group-title">{{ group.category }}</h3>
        <ul class="skills-list">
          <li class="skill-item" v-for="s in group.items" :key="s">{{ s }}</li>
        </ul>
      </div>
    </div>

    <div class="tech-section" v-if="tech && tech.length">
      <h3 style="margin-top:16px">Technology</h3>
      <div class="tech-grid">
        <div class="tech-item" v-for="t in tech" :key="t">{{ t }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ skills: Array, tech: Array })
const { skills, tech } = props
</script>
