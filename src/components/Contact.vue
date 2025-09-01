<template>
  <section id="contact">
    <h2>Contact</h2>
    <p>If you'd like to work together, email me at <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> or connect on <a :href="contact.linkedin" target="_blank" rel="noopener">LinkedIn</a>.</p>
    <p><strong>Location:</strong> {{ contact.location }}</p>

    <hr />

    <h3>Send a quick message</h3>
    <!-- Replace the action URL with your Formspree endpoint or other handler -->
    <form class="contact-form" method="POST" action="https://formspree.io/f/your-form-id" aria-label="Contact form">
      <label>
        Name
        <input type="text" name="name" required aria-required="true" />
      </label>

      <label>
        Email
        <input type="email" name="email" required aria-required="true" />
      </label>

      <label>
        Message
        <textarea name="message" rows="5" required aria-required="true"></textarea>
      </label>

      <div class="form-actions">
        <button type="submit">Send</button>
      </div>
    </form>
    <p class="muted">(This form uses Formspree by default — replace the action URL with your endpoint.)</p>
  </section>
</template>

<script setup>
const props = defineProps({ contact: Object })
const { contact } = props
</script>

