document.querySelectorAll("[data-form]").forEach((item) => {
  item.addEventListener("click", (e) => {
    const elem = e.target;
    item.classList.toggle("hide");
    elem.previousElementSibling.classList.toggle("hide");
    setTimeout(() => {
      item.classList.toggle("hide");
      elem.previousElementSibling.classList.toggle("hide");
    }, 1000);
    navigator.clipboard.writeText(elem.nextElementSibling.value);
  });
});
