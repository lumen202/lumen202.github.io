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

<style scoped>
.tech-grid { display:flex; flex-wrap:wrap; gap:0.5rem }
.tech-item { background:#0f1724; color:#fff; padding:0.4rem 0.6rem; border-radius:6px; font-size:0.9rem }
</style>

```