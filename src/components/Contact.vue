<template>
  <section id="contact" class="contact">
    <h2>Contact</h2>
    <p class="lead muted">Interested in hiring or collaborating? Reach out — I usually reply within 48 business hours.</p>

    <div class="contact-grid">
      <aside class="contact-card">
        <h3>Get in touch</h3>
        <p>If you'd like to work together, email me at <a :href="`mailto:${contact.email}`" class="link">{{ contact.email }}</a>.</p>
        <p><strong>LinkedIn:</strong> <a :href="contact.linkedin" target="_blank" rel="noopener" class="link">{{ contact.linkedin }}</a></p>
        <p><strong>Location:</strong> {{ contact.location }}</p>

        <div class="contact-meta">
          <p><strong>Availability:</strong> Open to freelance & full-time work</p>
          <p class="muted">Please include a short summary of the project, timeline, and budget when reaching out.</p>
        </div>
      </aside>

      <div class="contact-form-wrap">
        <h3>Send a message</h3>
        <!-- Replace the action URL with your Formspree endpoint or other handler -->
        <form class="contact-form" method="POST" action="https://formspree.io/f/your-form-id" aria-label="Contact form">
          <div class="form-row">
            <label class="form-field">
              <span class="label-text">Name</span>
              <input class="input" type="text" name="name" placeholder="Your full name" required aria-required="true" />
            </label>

            <label class="form-field">
              <span class="label-text">Email</span>
              <input class="input" type="email" name="email" placeholder="you@company.com" required aria-required="true" />
            </label>
          </div>

          <label class="form-field">
            <span class="label-text">Message</span>
            <textarea class="input textarea" name="message" rows="6" placeholder="Brief info about your project or question" required aria-required="true"></textarea>
          </label>

          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Send message</button>
            <small class="muted">(This form uses Formspree by default — replace the action URL with your endpoint.)</small>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ contact: Object })
const { contact } = props
</script>

