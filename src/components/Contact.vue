<template>
  <section id="contact">
    <h2>Contact</h2>
    <p>If you'd like to work together, email me at <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> or connect on <a :href="contact.linkedin" target="_blank" rel="noopener">LinkedIn</a>.</p>
    <p><strong>Location:</strong> {{ contact.location }}</p>
  </section>
</template>

<script setup>
const props = defineProps({ contact: Object })
const { contact } = props
</script>
