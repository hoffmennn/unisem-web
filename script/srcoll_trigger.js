document.addEventListener("DOMContentLoaded", function () {
  const toggleTrigger = document.querySelector(".title-block");
  const productList = document.getElementById("fullList");

  toggleTrigger.addEventListener("click", function () {
    productList.classList.toggle("open");


    if (productList.classList.contains("open")) {
        const offset = -150; // napr. -100px nad začiatok sekcie
        const top = productList.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
        top: top,
        behavior: "smooth"
    });
    }


  });
});