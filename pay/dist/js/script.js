document.querySelectorAll("[data-form]").forEach((item) => {
  item.addEventListener("click", (e) => {
    const elem = e.target;
    console.log(elem);
    navigator.clipboard.writeText(elem.nextElementSibling.value);
  });
});
