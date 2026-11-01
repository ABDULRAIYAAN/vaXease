// Tabs: clicking a .tab with data-tab="x" shows the .tab-content with id="x" and hides the rest.
(function () {
  document.querySelectorAll('.tabs').forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
          var panel = t.dataset.tab && document.getElementById(t.dataset.tab);
          if (panel) panel.style.display = 'none';
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        var target = tab.dataset.tab && document.getElementById(tab.dataset.tab);
        if (target) target.style.display = '';
      });
    });
  });
})();
