
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.number');
  const duration = 1500; // trvanie animácie

  const animateCount = (el) => {
    const target = +el.getAttribute('data-target');
    const isDecimal = target % 1 !== 0;
    const increment = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = isDecimal ? target.toFixed(1) : target;
      }
    };

    update();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted'); // zabráni opakovanému spusteniu
        animateCount(entry.target);
      }
    });
  }, {
    threshold: 0.5 // aktivuje sa keď je 50 % elementu viditeľných
  });

  counters.forEach(counter => observer.observe(counter));
});
