const btn = document.getElementById("show-product-list");
const list = document.getElementById("fullList");

btn.addEventListener("click", () => {
  if (list.classList.contains("open")) {
    list.style.maxHeight = "0px";
    list.classList.remove("open");
  } else {
    list.classList.add("open");
    list.style.maxHeight = list.scrollHeight + "px";
  }
});
