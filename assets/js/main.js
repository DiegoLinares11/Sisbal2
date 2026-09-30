// Prados de Sisbal: menú, encabezado, animaciones, galería y botón de compartir.
(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('menu');

  // Encabezado transparente sobre la portada y sólido al hacer scroll
  const hero = document.getElementById('inicio');
  const setSolid = () => header.classList.toggle('is-solid', window.scrollY > hero.offsetHeight - 120);
  setSolid();
  window.addEventListener('scroll', setSolid, { passive: true });

  // Menú en celular
  const closeMenu = () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // Resalta la sección visible en el menú
  const links = [...nav.querySelectorAll('a')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  // Animaciones de entrada
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => revealer.observe(el));

  // Galería de amenidades
  const dialog = document.querySelector('[data-lightbox-dialog]');
  const dialogImg = dialog.querySelector('[data-lightbox-img]');
  const dialogCaption = dialog.querySelector('[data-lightbox-caption]');
  document.querySelectorAll('[data-lightbox]').forEach((tile) => {
    tile.addEventListener('click', () => {
      dialogImg.src = tile.dataset.lightbox;
      dialogImg.alt = tile.querySelector('img').alt;
      dialogCaption.textContent = tile.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-lightbox-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  // Compartir la página: menú nativo del celular o copiar el enlace
  const shareBtn = document.querySelector('[data-share]');
  const shareStatus = document.querySelector('[data-share-status]');
  const shareData = {
    title: 'Prados de Sisbal',
    text: 'Mira Prados de Sisbal: lotes de 200 m² en Cobán, Alta Verapaz, con precio especial de preventa.',
    url: location.href.split('#')[0],
  };
  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* el usuario canceló */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      shareStatus.textContent = 'Enlace copiado. Pégalo en WhatsApp, Facebook o donde quieras compartirlo.';
    } catch {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${shareData.text} ${shareData.url}`)}`, '_blank', 'noopener');
    }
  });

  document.querySelector('[data-year]').textContent = new Date().getFullYear();
})();
