const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const activeShot = document.querySelector('#active-shot');
const shotTitle = document.querySelector('#shot-title');
const shotTabs = document.querySelectorAll('.shot-tab');

shotTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const src = tab.dataset.shot;
    const title = tab.dataset.title || 'Screenshot';
    if (!src || !activeShot) return;

    activeShot.src = src;
    activeShot.alt = `Screenshot Vaulta: ${title}`;
    if (shotTitle) shotTitle.textContent = title;
    shotTabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  });
});
