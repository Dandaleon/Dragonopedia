window.addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("loader-off");
    setTimeout(() => {
      loader.classList.add("off");
      document.querySelector(".header").classList.add("header__return");
    }, 1000);
  }, 1000);
});
