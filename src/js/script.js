window.addEventListener("DOMContentLoaded", () => {
  let pauseAnimateElement = document.querySelector(".dandaleon");
  function resetButton() {
    pauseAnimateElement.classList.remove("dandaleon__pause");
  }

  pauseAnimateElement.addEventListener("mouseover", () => {
    pauseAnimateElement.classList.add("dandaleon__pause");

    setTimeout(resetButton, 3000);
  });
});
