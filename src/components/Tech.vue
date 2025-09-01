```vue
<template>
  <section id="tech">
    <h2>Technology</h2>
    <div class="tech-grid">
      <div class="tech-item" v-for="t in tech" :key="t">{{ t }}</div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ tech: Array })
const { tech } = props
</script>

<!-- styles are handled globally in src/styles.css -->

```