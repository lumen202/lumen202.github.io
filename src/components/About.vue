<template>
  <section id="about">
    <h2>About</h2>
    <p class="lead">I'm <strong>{{ name }}</strong>, a full-stack developer building reliable, maintainable apps for web and desktop.</p>
    <p>{{ summary }}</p>
  </section>
</template>

<script setup>
const props = defineProps({ name: String, summary: String })
const { name, summary } = props
</script>
