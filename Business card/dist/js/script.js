window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body"),
    btns = document.querySelectorAll(".btn-modal"),
    cover = document.querySelector(".cover");
  body.style = "overflow: auto;";

  btns.forEach((item) => {
    item.addEventListener("click", () => {
      cover.classList.toggle("off");
      body.style = "overflow: hiden;";
    });
  });

  cover.addEventListener("click", () => {
    cover.classList.toggle("off");
    body.style = "overflow: auto;";
  });
});
