const { createApp, ref } = Vue;

createApp({
  setup() {
    const name = 'Joshua Diniega';
    const section = ref('about');

    const summary = `I build performant and accessible web interfaces with a focus on clean code, component-driven architecture, and user experience. I'm seeking frontend/web development roles where I can contribute to product quality and iterate quickly.`;

    const skills = [
      'HTML5 & Semantic Markup',
      'CSS3 — Flexbox & Grid',
      'JavaScript (ES6+)',
      'Vue 3 (Composition API)',
      'Responsive & Accessible UI',
      'Version Control (Git)',
      'Testing & Debugging',
    ];

    const projects = [
      {
        title: 'Portfolio Demo',
        subtitle: 'Static site — Vue (CDN)',
        description: 'A polished, responsive portfolio showcasing projects, skills and contact details — built with Vue and minimal tooling for reliable deployment.',
        live: '#',
        repo: '#'
      },
      {
        title: 'Todo App',
        subtitle: 'Vue + Local Storage',
        description: 'A small but solid todo app demonstrating component design, local persistence and keyboard accessibility.',
        live: '#',
        repo: '#'
      }
    ];

    const contact = {
      email: 'joshua@example.com',
      linkedin: 'https://www.linkedin.com/',
      location: 'Remote / Open to relocation'
    };

    function go(to) {
      section.value = to;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return { name, section, summary, skills, projects, contact, go };
  }
}).mount('#app');
