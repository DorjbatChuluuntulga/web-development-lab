(() => {
  const framework = document.body.dataset.framework;
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const key = `lab8-${framework}-theme`;
  const isDark = () => framework === 'bootstrap' ? root.getAttribute('data-bs-theme') === 'dark' : root.classList.contains('dark');
  const setTheme = (dark) => {
    if (framework === 'bootstrap') root.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
    else root.classList.toggle('dark', dark);
    themeButton.textContent = dark ? '☀️ Light mode' : '🌙 Dark mode';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', dark ? 'Гэрэлтэй горим руу шилжих' : 'Харанхуй горим руу шилжих');
  };
  setTheme(isDark());
  themeButton.addEventListener('click', () => {
    const dark = !isDark();
    setTheme(dark);
    try { localStorage.setItem(key, dark ? 'dark' : 'light'); } catch (_) {}
  });

  document.querySelectorAll('[data-comparison-card]').forEach(card => {
    card.addEventListener('click', () => {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(flipped));
      const title = card.querySelector('.flip-back strong')?.textContent || 'Зураг';
      card.setAttribute('aria-label', `${title}: ${flipped ? 'зураг руу буцах' : 'мэдээллийг харах'}`);
    });
  });

  const menuButton = document.querySelector('[data-menu-toggle]');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      const nav = document.getElementById('tailNav');
      const showing = nav.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', String(!showing));
      nav.classList.toggle('flex', !showing);
    });
    document.querySelectorAll('#tailNav a').forEach(link => link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        document.getElementById('tailNav').classList.add('hidden');
        document.getElementById('tailNav').classList.remove('flex');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    }));
  }

  const form = document.getElementById('feedbackForm');
  const status = form.querySelector('[data-form-status]');
  const fields = [...form.querySelectorAll('input,textarea')];
  const showTailwindError = field => {
    const invalid = !field.validity.valid;
    field.setAttribute('aria-invalid', String(invalid));
    const feedback = document.getElementById(field.getAttribute('aria-describedby'));
    feedback?.classList.toggle('hidden', !invalid);
    return invalid;
  };
  if (framework === 'tailwind') {
    fields.forEach(field => field.addEventListener('input', () => {
      if (field.hasAttribute('aria-invalid')) showTailwindError(field);
      status.textContent = '';
    }));
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = '';
    const valid = form.checkValidity();
    if (framework === 'bootstrap') {
      form.classList.add('was-validated');
    } else {
      fields.forEach(showTailwindError);
    }
    if (!valid) {
      status.textContent = 'Мэдээллээ шалгаад дахин оролдоно уу.';
      fields.find(field => !field.validity.valid)?.focus();
      return;
    }
    status.textContent = 'Маягт амжилттай шалгагдлаа. Энэ нь демо тул сервер рүү илгээгээгүй.';
    form.reset();
    if (framework === 'bootstrap') form.classList.remove('was-validated');
    else fields.forEach(field => {
      field.removeAttribute('aria-invalid');
      document.getElementById(field.getAttribute('aria-describedby'))?.classList.add('hidden');
    });
  });
})();
