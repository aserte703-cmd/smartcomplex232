// Общая логика для страниц отдельных комплексов (Вобкент / Шейхонча / Сафкарда)

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// шапка при скролле
const header = document.getElementById('siteHeader');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll); onScroll();
}

/**
 * Рендерит сетку домов/участков в стиле "выбор мест".
 * config = {
 *   containerId: 'plotGrid',
 *   count: 40,                 // сколько домов всего
 *   areaMin: 6, areaMax: 9,    // сотки участка (случайно в диапазоне, но стабильно)
 *   houseArea: '250 м²',
 *   priceNote: 'по запросу',
 * }
 */
function initPlotSelector(config) {
  const grid = document.getElementById(config.containerId);
  const panel = document.getElementById('plotPanel');
  if (!grid || !panel) return;

  // простой детерминированный "рандом" — чтобы при перезагрузке статусы не прыгали
  function seeded(n) {
    const x = Math.sin(n * 9973 + 1) * 10000;
    return x - Math.floor(x);
  }

  const cells = [];
  for (let i = 1; i <= config.count; i++) {
    const r = seeded(i);
    let status = 'free';
    if (r < 0.14) status = 'sold';
    else if (r < 0.34) status = 'reserved';

    const area = (config.areaMin + seeded(i + 500) * (config.areaMax - config.areaMin)).toFixed(1);

    const cell = document.createElement('div');
    cell.className = 'plot-cell ' + status;
    cell.textContent = i;
    cell.setAttribute('data-num', i);
    cell.setAttribute('data-status', status);
    cell.setAttribute('data-area', area);
    grid.appendChild(cell);
    cells.push(cell);

    if (status === 'free') {
      cell.addEventListener('click', () => selectPlot(cell));
    }
  }

  function selectPlot(cell) {
    cells.forEach(c => c.classList.remove('active'));
    cell.classList.add('active');

    const num = cell.getAttribute('data-num');
    const area = cell.getAttribute('data-area');

    panel.innerHTML = `
      <div class="ph-title">Дом №${num}</div>
      <span class="plot-panel-status ph-status">Свободен</span>
      <div class="ph-row"><span>Площадь участка</span><span>${area} соток</span></div>
      <div class="ph-row"><span>Площадь дома</span><span>${config.houseArea}</span></div>
      <div class="ph-row"><span>Этажей</span><span>2</span></div>
      <div class="ph-row"><span>Стоимость</span><span>${config.priceNote}</span></div>
      <button class="btn btn-solid" id="plotRequestBtn">Оставить заявку на дом №${num}</button>
      <div class="plot-form-msg" id="plotFormMsg">Заявка принята — наш менеджер свяжется с вами в ближайшее время.</div>
    `;

    document.getElementById('plotRequestBtn').addEventListener('click', () => {
      document.getElementById('plotFormMsg').classList.add('show');
      document.getElementById('plotRequestBtn').textContent = 'Заявка отправлена ✓';
      document.getElementById('plotRequestBtn').style.opacity = '0.6';
      document.getElementById('plotRequestBtn').style.pointerEvents = 'none';
    });
  }
}

/* ===== House gallery slider + lightbox (тот же принцип, что на главной) ===== */
function initHouseSlider() {
  const slides = Array.from(document.querySelectorAll('#houseSlider .house-slide'));
  const thumbs = Array.from(document.querySelectorAll('#houseThumbs .house-thumb'));
  if (!slides.length) return;
  const countEl = document.getElementById('hsCount');
  const total = slides.length;
  let current = 0;

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
    if (countEl) countEl.textContent = (current + 1) + ' / ' + total;
  }
  function go(delta) { current = (current + delta + total) % total; render(); }

  document.getElementById('hsPrev') && document.getElementById('hsPrev').addEventListener('click', () => go(-1));
  document.getElementById('hsNext') && document.getElementById('hsNext').addEventListener('click', () => go(1));
  thumbs.forEach((t, i) => t.addEventListener('click', () => { current = i; render(); }));

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = document.getElementById('lbImg');
    const lbCount = document.getElementById('lbCount');
    function openLightbox() {
      lbImg.src = slides[current].querySelector('img').src;
      lbCount.textContent = (current + 1) + ' / ' + total;
      lightbox.classList.add('open');
    }
    function closeLightbox() { lightbox.classList.remove('open'); }
    document.getElementById('houseSlider').addEventListener('click', openLightbox);
    document.getElementById('lbClose').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.getElementById('lbPrev').addEventListener('click', () => { go(-1); lbImg.src = slides[current].querySelector('img').src; lbCount.textContent = (current + 1) + ' / ' + total; });
    document.getElementById('lbNext').addEventListener('click', () => { go(1); lbImg.src = slides[current].querySelector('img').src; lbCount.textContent = (current + 1) + ' / ' + total; });
  }

  render();
}

/* ===== Floor plan tabs (тот же принцип, что на главной) ===== */
function initFloorTabs() {
  const tabs = Array.from(document.querySelectorAll('.floor-tab'));
  const rooms = Array.from(document.querySelectorAll('.room-list'));
  const plans = Array.from(document.querySelectorAll('.plan-img'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = tab.getAttribute('data-floor');
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      rooms.forEach(r => r.classList.toggle('active', r.getAttribute('data-floor') === idx));
      plans.forEach(p => p.classList.toggle('active', p.getAttribute('data-floor') === idx));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHouseSlider();
  initFloorTabs();
});
