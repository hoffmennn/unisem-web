
document.addEventListener("DOMContentLoaded", () => {
const hamburgers = document.querySelectorAll(".hamburger");

hamburgers.forEach(hamburger => {
    const navWrapper = hamburger.closest(".nav-wrapper"); // nájde najbližší .nav-wrapper
    const navMenu = navWrapper.querySelector(".nav-right");

    // Klik na hamburger
    hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    });

    // Skryť menu po kliknutí na odkaz
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
    });
});
});
