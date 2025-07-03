if (window.innerWidth <= 768) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.6 // 40% viditeľnosti na spustenie
    });

    document.querySelectorAll('.main-div').forEach(section => {
      observer.observe(section);
    });
  }