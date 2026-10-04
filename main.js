(function () {
  // Mobile navigation
  var btn = document.querySelector('.menu'), list = document.querySelector('nav ul');
  if (btn && list) {
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { list.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Scroll reveal (skipped when reduced motion is requested)
  var items = document.querySelectorAll('.rev');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  // Inquiry form: frontend-only validation. Replace the TODO with a real endpoint.
  var form = document.getElementById('inquiry');
  if (!form) return;
  var msgs = { name: 'Enter your name.', business: 'Enter your business name.', email: 'Enter a valid email address.', country: 'Select your country.', details: 'Tell us a little about your project.' };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true, first = null;
    Object.keys(msgs).forEach(function (id) {
      var f = form.elements[id], bad = !f.value.trim() || (id === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
      f.setAttribute('aria-invalid', bad);
      document.getElementById(id + '-err').textContent = bad ? msgs[id] : '';
      if (bad) { ok = false; first = first || f; }
    });
    if (!ok) { first.focus(); return; }
    // TODO: send new FormData(form) to your backend or form service (Formspree, Netlify, etc.)
    form.hidden = true;
    var done = document.getElementById('done');
    done.hidden = false; done.focus();
  });
})();
