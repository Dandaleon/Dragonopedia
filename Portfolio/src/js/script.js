const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counter = document.querySelectorAll(".skills__counters-percent"),
  line = document.querySelectorAll(".skills__counters-filler");

counter.forEach((item, i) => {
  line[i].style.width = item.innerHTML;
});
