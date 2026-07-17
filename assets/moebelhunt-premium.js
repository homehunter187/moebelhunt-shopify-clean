document.documentElement.classList.add('mh-premium-ready');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header-component');
  if (!header) return;

  const toggleScrolled = () => {
    if (window.scrollY > 24) {
      header.classList.add('mh-is-scrolled');
    } else {
      header.classList.remove('mh-is-scrolled');
    }
  };

  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled, { passive: true });
});
