// Mobile "Contact" slide-in panel (replaces the theme's 200 kB JavaScript bundle)
document.querySelectorAll('.contact-modal').forEach(function (modal) {
  function show(e) { e.stopPropagation(); modal.classList.add('is-active', 'is-modal-active'); document.body.style.overflow = 'hidden'; }
  function hide() { modal.classList.remove('is-active', 'is-modal-active'); document.body.style.overflow = 'auto'; }
  modal.querySelector('.theme-btn').addEventListener('click', show);
  modal.querySelector('.contact-modal__overlay').addEventListener('click', function (e) { e.stopPropagation(); hide(); });
  modal.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('click', hide);
});
