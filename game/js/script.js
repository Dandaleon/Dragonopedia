const upgrade = document.querySelector(".company__btn-upgrade"),
  grade = document.querySelector(".grade"),
  closeUp = document.querySelector(".grade__btn-close"),
  pickAccaunt = document.querySelectorAll(".players-list__item");

if (upgrade) {
  upgrade.addEventListener("click", () => {
    grade.classList.add("grade__active");
  });
}

if (closeUp) {
  closeUp.addEventListener("click", () => {
    grade.classList.remove("grade__active");
  });
}

if (pickAccaunt) {
  pickAccaunt.forEach((item) =>
    item.addEventListener("click", () => {
      grade.classList.remove("grade__active");
    })
  );
}
