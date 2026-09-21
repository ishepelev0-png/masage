// The sticky WhatsApp bar only earns its place once the hero CTA has
// scrolled away — while both are on screen it is pure duplication.
// Default state is visible, so the bar survives with JS disabled.
const bar = document.querySelector('.quickbar');
const anchor = document.querySelector('[data-cta-anchor]');

if (bar && anchor && 'IntersectionObserver' in window) {
  new IntersectionObserver(
    ([entry]) => bar.classList.toggle('is-hidden', entry.isIntersecting),
    { threshold: 0 }
  ).observe(anchor);
}
