<template>
  <section id="skills">
    <h2>Skills</h2>
    <ul class="skills-list">
      <li v-for="s in skills" :key="s">{{ s }}</li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({ skills: Array })
const { skills } = props
</script>
