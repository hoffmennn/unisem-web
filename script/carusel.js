(function () {
  const gallery       = document.getElementById('gallery');
  if (!gallery) return;                 // bezpečnostná poistka

  const slidesEl      = gallery.querySelector('.slides');
  const slides        = Array.from(gallery.querySelectorAll('.slide'));
  const dotsContainer = gallery.querySelector('.dots');

  let currentIndex = 0;
  let autoTimer   = null;

  /* ---------- VÝPOČTY PODĽA PLATFORMY ------------------ */
  function isMobile () { return window.innerWidth <= 768; }

  function visibleCount () { return isMobile() ? 1 : 3; }

  function slideWidth () {
    const gap = isMobile() ? 0 : 20;
    return slides[0].clientWidth + gap;
  }

  function maxIndex () {
    return slides.length - visibleCount();
  }

  /* ---------- KRESLENIE ------------------ */
  function update () {
    const vc = visibleCount();

    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex()));

    if (isMobile()) {
      /* Natívny scroll na mobile */
      slidesEl.scrollTo({
        left: currentIndex * slideWidth(),
        behavior: 'smooth'
      });
    } else {
      /* translateX na desktope */
      slidesEl.style.transform = `translateX(-${currentIndex * slideWidth()}px)`;
    }

    /* Bodky vytvárame len na desktope */
    dotsContainer.innerHTML = '';
    if (!isMobile()) {
      const dotsCnt = slides.length - vc + 1;
      for (let i = 0; i < dotsCnt; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          update();
          restartAuto();              // reštart časovača po manuálnom kliknutí
        });
        dotsContainer.appendChild(dot);
      }
    }
  }

  /* ---------- AUTO‑SLIDE KAŽDÉ 3 s ------------------ */
  function startAuto () {
    autoTimer = setInterval(() => {
      currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      update();
    }, 3000);
  }

  function stopAuto ()   { if (autoTimer) clearInterval(autoTimer); }
  function restartAuto () { stopAuto(); startAuto(); }

  /* ---------- REAKCIE NA RESIZE ------------------ */
  window.addEventListener('resize', () => {
    update();
    restartAuto();                    // prepočíta šírky & reštartuje timer
  });

  /* ---------- INIT ------------------ */
  update();
  startAuto();
})();
