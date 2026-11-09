(() => {
  const frame = document.querySelector('.garden-frame');
  if (!frame) return;
  const desktop = matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
  let pending;
  function fit() {
    frame.style.removeProperty('--home-fit');
    if (!desktop.matches) return;
    const bodyStyle = getComputedStyle(document.body);
    const padding = parseFloat(bodyStyle.paddingTop) + parseFloat(bodyStyle.paddingBottom);
    const available = Math.max(1, document.documentElement.clientHeight - padding - 2);
    frame.style.setProperty('--home-fit', Math.min(1, available / frame.getBoundingClientRect().height));
  }
  function schedule() {
    cancelAnimationFrame(pending);
    pending = requestAnimationFrame(fit);
  }
  fit();
  window.addEventListener('resize', schedule);
  desktop.addEventListener('change', schedule);
  document.fonts.ready.then(schedule);
  window.addEventListener('load', schedule, { once: true });
})();
