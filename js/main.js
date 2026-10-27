const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function safeExternal(url) {
  return typeof url === 'string' && /^(https?:\/\/|mailto:)/i.test(url) && !url.includes('your-username') && !url.includes('your-profile') && !url.includes('your.email@example.com');
}
function icon(name) {
  const paths = {
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13.3 13.3 0 0 0-7 0C5.5 1.2 3.3 2.5 3.3 2.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 7 19v3"/>',
    linkedin: '<path d="M4 9v11M4 4v.01M9 20v-7a4 4 0 0 1 8 0v7M9 9v11"/>',
    email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.arrow}</svg>`;
}
function link(label, url, extraClass = '') {
  if (!safeExternal(url)) return '';
  const external = /^https?:\/\//i.test(url);
  return `<a class="${extraClass}" href="${url}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`;
}
function renderPortfolio() {
  const d = portfolioData;
  $$('[data-name]').forEach(el => el.textContent = d.name);
  $('[data-role]').textContent = d.role;
  $('[data-status]').textContent = d.status;
  $('[data-tagline]').textContent = d.tagline;
  $('[data-about]').textContent = d.about;
  $('[data-about-extra]').textContent = d.aboutExtra;
  document.title = `${d.name} — Portfolio`;
  $('meta[name="description"]').content = `${d.name} — ${d.role}. Explore selected projects, skills, and experience.`;
  const resume = $('[data-resume]');
  if (d.resume) resume.href = d.resume; else resume.hidden = true;
  const socialHtml = (d.socials || []).filter(s => safeExternal(s.url)).map(s => link(`${icon(s.icon)}<span>${s.label}</span>`, s.url, 'social-link')).join('');
  $('#hero-social').innerHTML = socialHtml;
  $('#project-grid').innerHTML = (d.projects || []).filter(p => p.title && p.title.trim()).map((p, i) => `
    <article class="project-card ${p.featured ? 'project-featured' : ''}">
      <div class="project-top"><span class="project-number">${p.number || String(i + 1).padStart(2, '0')}</span><span class="project-category">${p.category || 'PROJECT'}</span><span class="project-arrow">↗</span></div>
      <h3>${p.title}</h3><p class="project-description">${p.description || ''}</p>
      <details class="project-details"><summary>How I approached it</summary><dl><dt>Problem</dt><dd>${p.problem || 'Add the problem you solved.'}</dd><dt>My role</dt><dd>${p.role || 'Describe your contribution.'}</dd><dt>Result</dt><dd>${p.result || 'Share the outcome or evidence.'}</dd></dl></details>
      <div class="tag-list">${(p.stack || []).map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-links">${link('Source code '+icon('arrow'), p.github)}${link('Live demo '+icon('arrow'), p.demo)}</div>
    </article>`).join('');
  $('#skill-groups').innerHTML = (d.skills || []).filter(g => g.items?.length).map(g => `<div class="skill-group"><h3>${g.group}</h3><div class="tag-list">${g.items.map(s => `<span>${s}</span>`).join('')}</div></div>`).join('');
  $('#about-facts').innerHTML = (d.facts || []).map(f => `<div class="fact"><span>${f.label}</span><strong>${f.value}</strong></div>`).join('');
  const exp = d.experience || [];
  $('[data-optional-section="experience"]').hidden = !exp.length;
  $('[data-optional-link="experience"]').hidden = !exp.length;
  $('#experience-list').innerHTML = exp.map(e => `<article class="timeline-item"><div class="timeline-date">${e.period || ''}</div><div><h3>${e.role || ''}</h3><p class="timeline-org">${e.organization || ''}</p><p>${e.description || ''}</p></div></article>`).join('');
  const testimonials = d.testimonials || [];
  $('[data-optional-section="testimonials"]').hidden = !testimonials.length;
  $('#testimonial-grid').innerHTML = testimonials.map(t => `<blockquote class="testimonial"><span class="quote-mark">“</span><p>${t.quote || ''}</p><footer><strong>${t.name || ''}</strong><span>${t.title || ''}</span></footer></blockquote>`).join('');
  $('[data-email-button]').href = `mailto:${d.email}`;
  $('#contact-meta').innerHTML = `${link(`${icon('email')}<span>${d.email}</span>`, `mailto:${d.email}`)}${d.phone ? `<a href="tel:${d.phone.replace(/[^+\d]/g, '')}"><span>${d.phone}</span></a>` : ''}<span class="location">${d.location || ''}</span>`;
  $('#year').textContent = new Date().getFullYear();
}
renderPortfolio();

const menuButton = $('.menu-toggle');
const nav = $('.site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !open);
});
$$('.site-nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation');
}));
const sections = $$('main section[id]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) $$('.site-nav a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
  }), { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(section => observer.observe(section));
}
