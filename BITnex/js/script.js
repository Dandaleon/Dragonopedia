const hamburger = document.querySelector(".header__burger"),
  menu = document.querySelector(".header__aside");

hamburger.addEventListener("click", () => {
  menu.classList.add("header__aside-active");
});

menu.addEventListener("click", () => {
  menu.classList.remove("header__aside-active");
});
