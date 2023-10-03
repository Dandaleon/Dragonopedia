window.addEventListener("DOMContentLoaded", () => {
  const scale = document.querySelector(".block-left"),
    timer = document.querySelector(".block-right"),
    countdown = document.querySelector("#caunt"),
    tick = 1000;
  let counter = 10000,
    time,
    int,
    fac,
    scrolling;

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
        countdown.parentElement.parentElement.style = "opacity: 0";

        timer.classList.toggle("off");
        scale.classList.toggle("off");

        document.querySelector(".rocket").style.cssText =
          "bottom: 23px; animation: shakeShip 0.2s infinite;";
        gameTimer();
        gameScale();
        gameScroll();
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
    }, tick);
  }
  function gameScale() {
    const facto = document.querySelector("#factor"),
      sc = document.querySelectorAll(".scale");
    let t = 100,
      s = 50,
      fl = 0,
      res = 0;

    sc.forEach((item) => {
      item.classList.add("gray");
    });
    fac = setTimeout(function set() {
      t += 1;
      if (t >= 100) {
        fl = `00`;
        res++;
        t -= 100;
      } else if (t < 10) {
        fl = `0${t}`;
      } else {
        fl = t;
      }

      if (res >= 10) {
        s = 10;
        sc.forEach((item) => {
          item.classList.remove("green");
          item.classList.add("gold");
          document.querySelector(".scale").style = "width: 175px";
          if (res >= 100) {
            document.querySelector(".scale").style = "width: 190px";
          }
        });
      } else if (res >= 5) {
        s = 20;
        sc.forEach((item) => {
          item.classList.remove("blue");
          item.classList.add("green");
        });
      } else if (res >= 2) {
        s = 35;
        sc.forEach((item) => {
          item.classList.remove("gray");
          item.classList.add("blue");
          document.querySelector(".scale").style = "width: 145px";
        });
      }

      facto.textContent = `${res}.${fl}`;

      fac = setTimeout(set, s);
    }, s);
  }
  function gameScroll() {
    let scroll = 0;

    scrolling = setInterval(() => {
      document.querySelector(".canvas").style = `bottom: ${scroll}px`;
      scroll--;
    }, 1);
  }

  function stopTimer(t) {
    clearInterval(t);
  }
  gameStart();
});
