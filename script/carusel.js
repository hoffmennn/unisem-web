


(function() {
      const gallery = document.getElementById('gallery');
      const slidesEl = gallery.querySelector('.slides');
      const slides = Array.from(gallery.querySelectorAll('.slide'));
      const dotsContainer = gallery.querySelector('.dots');

      let currentIndex = 0;

      function update() {
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? 1 : 3;
        const gap = isMobile ? 0 : 20;
        const slideWidth = slides[0].clientWidth + gap;
        const maxIndex = slides.length - visibleCount;
        currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

        slidesEl.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Vytvorenie gulôčok
        dotsContainer.innerHTML = '';
        const dotsCount = isMobile ? slides.length : slides.length - 2;
        for (let i = 0; i < dotsCount; i++) {
          const dot = document.createElement('div');
          dot.className = 'dot';
          if (i === currentIndex) dot.classList.add('active');
          dot.addEventListener('click', () => { currentIndex = i; update(); });
          dotsContainer.appendChild(dot);
        }
      }

      window.addEventListener('resize', update);
      update();
    })();