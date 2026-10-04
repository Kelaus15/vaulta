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
    menuToggle.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Apri menu');
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
    shotTabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-pressed', 'true');
  });
});

const shotDialog = document.querySelector('#shot-dialog');
document.querySelector('#open-shot')?.addEventListener('click', () => {
  if (!activeShot || !shotDialog) return;
  const large = document.querySelector('#dialog-shot');
  large.src = activeShot.src;
  large.alt = activeShot.alt;
  document.querySelector('#dialog-title').textContent = shotTitle.textContent;
  shotDialog.showModal();
});
document.querySelector('#close-shot')?.addEventListener('click', () => shotDialog.close());
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mainNav?.classList.contains('open')) {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Apri menu');
    menuToggle.focus();
  }
});
