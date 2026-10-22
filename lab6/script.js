const root = document.documentElement;
const themeButton = document.querySelector('#themeToggle');
const loader = document.querySelector('#pageLoader');

function saveTheme(theme) {
  try { localStorage.setItem('lab6-theme', theme); } catch (_) {}
}

function loadTheme() {
  try { return localStorage.getItem('lab6-theme'); } catch (_) { return null; }
}

function setTheme(theme) {
  const dark = theme === 'dark';
  root.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Гэрэлтэй горим руу шилжих' : 'Харанхуй горим руу шилжих');
  themeButton.textContent = dark ? '☀️ Light mode' : '🌙 Dark mode';
}

const savedTheme = loadTheme();
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (systemDark ? 'dark' : 'light'));

themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  saveTheme(next);
});

document.querySelectorAll('.flip-card').forEach((card) => {
  card.addEventListener('click', () => {
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
    const title = card.querySelector('.flip-back strong').textContent.trim();
    const details = card.querySelector('.photo-details').textContent.replace(/\s+/g, ' ').trim();
    card.setAttribute('aria-label', flipped ? `${title}. ${details}. Нүүрэн тал руу буцаах` : `${title}: тайлбарыг харах`);
  });
});

function hideLoader() {
  if (!loader) return;
  loader.classList.add('is-hidden');
  window.setTimeout(() => loader.remove(), 350);
}

if (document.readyState === 'complete') {
  hideLoader();
} else {
  window.addEventListener('load', hideLoader, { once: true });
}
