document.addEventListener("DOMContentLoaded", () => {
  const scale = document.querySelector(".block-left"),
    timer = document.querySelector(".block-right"),
    countdown = document.querySelector("#caunt"),
    tick = 1000;
  let counter = 1000,
    time,
    int;

  function gameStart() {
    timer.classList.toggle("off");
    scale.classList.toggle("off");

    int = setInterval(() => {
      counter <= 10000
        ? (countdown.textContent = `0${(counter - tick) / 1000}`)
        : (countdown.textContent = (counter - tick) / 1000);
      counter -= tick;
      if (counter <= 0) {
        clearInterval(int);
        counter = 10000;
        countdown.textContent = `10`;
        countdown.parentElement.parentElement.classList.toggle("off");

        timer.classList.toggle("off");
        scale.classList.toggle("off");

        gameTimer();
        gameScale();
      }
    }, tick);
  }
  function gameReload() {
    timer.classList.toggle("off");
    scale.classList.toggle("off");

    setTimeout(gameStart, 1000);
  }

  function gameTimer() {
    const sec = document.querySelector("#sec");
    const min = document.querySelector("#min");

    let s = 0,
      m = 0;

    time = setInterval(() => {
      if (s < tick * 60) {
        s < tick * 10
          ? (sec.textContent = `0${s / 1000}`)
          : (sec.textContent = `${s / 1000}`);
      }
      if (m < tick * 60) {
        m < tick * 10
          ? (min.textContent = `0${m / 1000}`)
          : (min.textContent = `${m / 1000}`);
      }

      if (m === 1000 && s === 20000) {
        stopTimer();
        // sec.textContent = `00`;
        // min.textContent = `00`;

        // gameReload();
      }

      s += tick;
      if (s >= 60 * tick) {
        m += tick;
        s -= 60 * tick;
      }
    }, 100);
  }
  function gameScale() {
    const facto = document.querySelector();
  }
  gameStart();

  function stopTimer() {
    clearInterval(time);
  }
});
