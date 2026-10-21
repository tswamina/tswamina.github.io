(() => {
  const counter = document.getElementById('home-ping');
  if (!counter) return;

  let timer;
  let pending;
  let active = true;

  async function measure() {
    clearTimeout(timer);
    if (!active || document.hidden || !navigator.onLine || pending) return;
    const request = new AbortController();
    pending = request;
    const timeout = setTimeout(() => request.abort(), 5000);
    const start = performance.now();
    try {
      // A fresh HEAD request measures the HTTP round trip to the site's edge.
      const response = await fetch(`/ping.txt?t=${Date.now()}`, {
        method: 'HEAD', cache: 'no-store', credentials: 'omit', signal: request.signal,
      });
      if (!response.ok) throw new Error('Ping failed');
      if (active && !document.hidden) {
        counter.textContent = `${Math.max(1, Math.round(performance.now() - start))} ms`;
        counter.hidden = false;
      }
    } catch {
      counter.hidden = true;
    } finally {
      clearTimeout(timeout);
      pending = null;
      if (active && !document.hidden && navigator.onLine) timer = setTimeout(measure, 1000);
    }
  }

  function pause() {
    clearTimeout(timer);
    pending?.abort();
  }
  document.addEventListener('visibilitychange', () => document.hidden ? pause() : measure());
  window.addEventListener('offline', () => { pause(); counter.hidden = true; });
  window.addEventListener('online', measure);
  window.addEventListener('pagehide', () => { active = false; pause(); });
  window.addEventListener('pageshow', () => { active = true; measure(); });
  measure();
})();
