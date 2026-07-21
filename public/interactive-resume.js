(function () {
  const body = document.body;
  const DETAILS = ['concise', 'standard', 'full'];
  const CATS = ['language', 'frontend', 'backend', 'database', 'cloud', 'tools', 'data', 'design', 'soft'];

  const activeCats = new Set(CATS);
  const activeFocus = new Set();

  const tokens = (el, attr) => (el.dataset[attr] || '').split(/\s+/).filter(Boolean);
  const currentDetail = () => DETAILS.find((d) => body.classList.contains('detail-' + d)) || 'standard';
  const currentSkills = () => (body.classList.contains('skills-tags') ? 'tags' : 'grouped');

  const applyFilters = () => {
    document.querySelectorAll('.sheet [data-cat]').forEach((el) => {
      const cats = tokens(el, 'cat');
      el.classList.toggle('is-filtered', !cats.some((c) => activeCats.has(c)));
    });

    document.querySelectorAll('.description > li').forEach((li) => {
      const focus = tokens(li, 'focus');
      const hidden = activeFocus.size > 0 && !focus.some((f) => activeFocus.has(f));
      li.classList.toggle('is-filtered', hidden);
    });

    document.querySelectorAll('.experience-item').forEach((item) => {
      item.classList.remove('is-filtered');
      const shown = [...item.querySelectorAll('.description > li')].some((li) => li.offsetParent !== null);
      item.classList.toggle('is-filtered', !shown);
    });
  };

  const sync = () => {
    document.querySelectorAll('[data-detail]').forEach((el) => {
      el.setAttribute('aria-pressed', String(el.dataset.detail === currentDetail()));
    });
    document.querySelectorAll('[data-skills]').forEach((el) => {
      el.setAttribute('aria-pressed', String(el.dataset.skills === currentSkills()));
    });
    document.querySelectorAll('[data-lens]').forEach((el) => {
      el.setAttribute('aria-pressed', String(body.classList.contains('lens-' + el.dataset.lens)));
    });
    document.querySelectorAll('.chip[data-focus]').forEach((el) => {
      el.setAttribute('aria-pressed', String(activeFocus.has(el.dataset.focus)));
    });
    document.querySelectorAll('.chip[data-cat]').forEach((el) => {
      el.setAttribute('aria-pressed', String(activeCats.has(el.dataset.cat)));
    });
    document.querySelectorAll('[data-focus-reset]').forEach((el) => {
      el.setAttribute('aria-pressed', String(activeFocus.size === 0));
    });
    applyFilters();
  };

  const toggle = (set, value) => {
    if (set.has(value)) set.delete(value);
    else set.add(value);
  };

  document.querySelectorAll('.controls .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const d = chip.dataset;
      if (d.detail) DETAILS.forEach((level) => body.classList.toggle('detail-' + level, level === d.detail));
      if (d.skills) body.classList.toggle('skills-tags', d.skills === 'tags');
      if (d.lens) body.classList.toggle('lens-' + d.lens);
      if (d.focus) toggle(activeFocus, d.focus);
      if ('focusReset' in d) activeFocus.clear();
      if (d.cat) {
        toggle(activeCats, d.cat);
        if (activeCats.size === 0) CATS.forEach((c) => activeCats.add(c));
      }
      sync();
    });
  });

  if (!DETAILS.some((d) => body.classList.contains('detail-' + d))) body.classList.add('detail-standard');
  sync();
})();
