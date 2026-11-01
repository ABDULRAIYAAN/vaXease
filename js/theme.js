// Light and dark theme. Remembers the choice; defaults to the system setting.
(function () {
  var KEY = 'vaxease-theme';
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.classList.toggle('dark', stored ? stored === 'dark' : prefersDark);

  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var dark = root.classList.toggle('dark');
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
  });
})();
