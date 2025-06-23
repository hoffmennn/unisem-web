const stickyNav = document.querySelector('.sticky-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    stickyNav.classList.remove('hidden');
    stickyNav.classList.add('show');
  } else {
    stickyNav.classList.remove('show');
    stickyNav.classList.add('hidden');
  }
});



