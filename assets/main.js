// Footer year
document.querySelectorAll('#y').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
