(function () {
  const gallery      = document.getElementById('gallery');
  const slidesEl     = gallery.querySelector('.slides');
  const slides       = Array.from(gallery.querySelectorAll('.slide'));
  const dotsContainer = gallery.querySelector('.dots');

  let currentIndex   = 0;
  let autoTimer      = null;   // ⬅️  časovač pre auto‑slide

  function update () {
    const isMobile     = window.innerWidth <= 768;
    const visibleCount = isMobile ? 1 : 3;
    const gap          = isMobile ? 0 : 20;
    const slideWidth   = slides[0].clientWidth + gap;
    const maxIndex     = slides.length - visibleCount;

    // normalizuj index
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

    // posuň slides
    slidesEl.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // (re)‑vytvor bodky
    dotsContainer.innerHTML = '';
    const dotsCount = isMobile ? slides.length : slides.length - visibleCount + 1;
    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        update();
        restartAutoSlide();      // ak používateľ klikne, reštartuj časovač
      });
      dotsContainer.appendChild(dot);
    }
  }

  /* === Automatické posúvanie ========================================== */
  function startAutoSlide () {
    autoTimer = setInterval(() => {
      const isMobile     = window.innerWidth <= 768;
      const visibleCount = isMobile ? 1 : 3;
      const maxIndex     = slides.length - visibleCount;

      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      update();                      // posuň na ďalší „set“ slide‑ov
    }, 3000);                        // 3 sekundy
  }

  function stopAutoSlide () {
    if (autoTimer) clearInterval(autoTimer);
  }

  function restartAutoSlide () {
    stopAutoSlide();
    startAutoSlide();
  }

  /* === Reakcia na resize ============================================== */
  window.addEventListener('resize', () => {
    update();
    restartAutoSlide();              // prerátaj šírky a reštartuj timer
  });

  /* === Inicializácia ================================================== */
  update();
  startAutoSlide();
})();
