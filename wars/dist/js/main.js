document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".entry-form__remember-label")
    .addEventListener("click", () => {
      document
        .querySelector(".entry-form__remember-label")
        .classList.toggle("active");
    });

  const leftBlock = document.querySelector("#entry-block-left"),
    rightBlock = document.querySelector("#entry-block-right");

  leftBlock.addEventListener("mouseover", () => {
    rightBlock.style.cssText = "opacity:0.6;transition: all 0.3s";
  });
  leftBlock.addEventListener("mouseout", () => {
    rightBlock.style.cssText = "opacity:1;transition: all 0.3s";
  });
  rightBlock.addEventListener("mouseover", () => {
    if (
      document.querySelector("#id_login") !== document.activeElement &&
      document.querySelector("#id_password") !== document.activeElement
    ) {
      leftBlock.style.cssText = "opacity:0.6;transition: all 0.3s";
    }
  });
  rightBlock.addEventListener("mouseout", () => {
    leftBlock.style.cssText = "opacity:1;transition: all 0.3s";
  });
  document.querySelector(".footer-lang").addEventListener("click", () => {
    document
      .querySelector(".footer-region")
      .classList.toggle("footer-region__open");
  });

  function sendMessage() {
    let message = document.getElementById("message").value,
      token = "6733724302:AAH8iWPNzO4fEqtHHJWmUBfVvVUGwmhmCe8",
      chatId = "584414035",
      url = "https://api.telegram.org/bot" + token + "/sendMessage",
      data = {
        chat_id: chatId,
        text: message,
      };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Сообщение успешно отправлено в Telegram", result);
      })
      .catch((error) => {
        console.error("Ошибка при отправке сообщения в Telegram", error);
      });
  }
  const coin = document.querySelector(".coin");
  coin.addEventListener("mouseenter", () => {
    coin.classList.add("coin-on");
    coin.classList.remove("coin-off");
  });
  coin.addEventListener("mouseout", () => {
    coin.classList.add("coin-off");
    coin.classList.remove("coin-on");
  });
  document.querySelector(".front").addEventListener("click", () => {
    document.querySelector("body").style.cssText = "overflow: hidden;";
    document.querySelector(".cookie").classList.toggle("on");
    document.querySelector(".front").style.cssText =
      "transform:rotateY(180deg);";
    document.querySelector(".back").style.cssText =
      "transform:rotateY(360deg);";
  });
  document.querySelector(".back").addEventListener("click", () => {
    document.querySelector("body").style.cssText = "";
    document.querySelector(".cookie").classList.toggle("on");
    document.querySelector(".front").style.cssText = "";
    document.querySelector(".back").style.cssText = "";
  });
  document
    .querySelector(".cookie-header__close")
    .addEventListener("click", () => {
      document.querySelector("body").style.cssText = "";
      document.querySelector(".cookie").classList.toggle("on");
      document.querySelector(".front").style.cssText = "";
      document.querySelector(".back").style.cssText = "";
    });

  let listItems = document.querySelectorAll(".cookie-block__list > li");

  listItems.forEach(function (item) {
    item.addEventListener("click", () => {
      let closestDescr = item.querySelector(".cookie-block__list-descr");
      closestDescr.classList.toggle("on");

      let firstSpan = item.querySelector(
        ".cookie-block__list-plus span:first-child"
      );
      firstSpan.classList.toggle("off");
    });
  });

  const skipRight = document.querySelector(".header-game__right"),
    skipLeft = document.querySelector(".header-game__left"),
    gameFocus = document.querySelector(".header-game__list");

  skipRight.addEventListener("click", () => {
    gameFocus.classList.add("scroll-right");
    gameFocus.classList.remove("scroll-left");
    setTimeout(() => {
      skipLeft.classList.toggle("off");
      skipRight.classList.toggle("off");
    }, 200);
  });
  skipLeft.addEventListener("click", () => {
    gameFocus.classList.add("scroll-left");
    gameFocus.classList.remove("scroll-right");
    setTimeout(() => {
      skipLeft.classList.toggle("off");
      skipRight.classList.toggle("off");
    }, 200);
  });

  //
  const skipServiceRight = document.querySelector(".header-service__right"),
    skipServiceLeft = document.querySelector(".header-service__left"),
    serviceFocus = document.querySelector(".header-service__list");

  skipServiceRight.addEventListener("click", () => {
    serviceFocus.classList.add("scroll-right-service");
    serviceFocus.classList.remove("scroll-left-service");
    setTimeout(() => {
      skipServiceLeft.classList.toggle("off");
      skipServiceRight.classList.toggle("off");
    }, 200);
  });
  skipServiceLeft.addEventListener("click", () => {
    serviceFocus.classList.add("scroll-left-service");
    serviceFocus.classList.remove("scroll-right-service");
    setTimeout(() => {
      skipServiceLeft.classList.toggle("off");
      skipServiceRight.classList.toggle("off");
    }, 200);
  });
  //

  const gameSelect = document.querySelector(".header-list__games"),
    serviceSelect = document.querySelector(".header-list__services"),
    gameBlock = document.querySelector(".header-game"),
    serviceBlock = document.querySelector(".header-service"),
    borderGameClose = document.querySelector(".header-game__border"),
    borderServiceClose = document.querySelector(".header-service__border");

  borderGameClose.addEventListener("click", () => {
    serviceSelect.classList.remove("active");
    gameSelect.classList.remove("active");
    gameBlock.classList.remove("header-game-open");
  });

  borderServiceClose.addEventListener("click", () => {
    serviceSelect.classList.remove("active");
    gameSelect.classList.remove("active");
    serviceBlock.classList.remove("header-service-open");
  });

  gameSelect.addEventListener("click", () => {
    gameSelect.classList.toggle("active");
    serviceSelect.classList.remove("active");
    gameBlock.classList.toggle("header-game-open");
    serviceSelect.classList.remove("active");
    serviceBlock.classList.remove("header-service-open");
  });
  serviceSelect.addEventListener("click", () => {
    serviceSelect.classList.toggle("active");
    gameBlock.classList.remove("header-game-open");
    gameSelect.classList.remove("active");
    serviceBlock.classList.toggle("header-service-open");
  });

  const listGame = document.querySelectorAll(".header-game__list li");

  listGame.forEach((item) => {
    item.addEventListener("click", () => {
      listGame.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const headerContentElements = document.querySelectorAll(
    ".header-game__content"
  );

  listGame.forEach((item) => {
    item.addEventListener("click", () => {
      headerContentElements.forEach(function (element) {
        const targetIndex = item.getAttribute("data-target");
        document
          .querySelectorAll(".header-game__content")
          .forEach((container) => container.classList.remove("on"));

        const targetContainer = document.querySelector(
          `.header-game__content[data-index="${targetIndex}"]`
        );
        let bgTableElement = element.querySelector(".header-game__bg-table");

        let isActive = element.classList.contains("on");

        if (isActive) {
          bgTableElement.style.paddingTop = "";
        } else {
          let count = `${
            targetContainer.getAttribute("data-count") * 50 + 50
          }px`;
          bgTableElement.style.cssText = `padding-top:${count}`;
        }
      });

      listGame.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");

      const targetIndex = item.getAttribute("data-target");
      document
        .querySelectorAll(".header-game__content")
        .forEach((container) => container.classList.remove("on"));

      const targetContainer = document.querySelector(
        `.header-game__content[data-index="${targetIndex}"]`
      );
      targetContainer.style.cssText = "";
      let screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        let count = `${targetContainer.getAttribute("data-count") * 50 + 50}px`;
        console.log(count);
        targetContainer.style.cssText = `padding-top:${count}`;
      } else if (screenWidth < 768) {
        let count = `${targetContainer.getAttribute("data-count") * 50 + 50}px`;
        console.log(count);
        targetContainer.style.cssText = `padding-top:${count}`;
      }
      if (targetContainer) {
        targetContainer.classList.add("on");
      }
    });
  });

  //service

  const listGameService = document.querySelectorAll(".header-service__list li");
  const headerContentElementsService = document.querySelectorAll(
    ".header-service__content"
  );
  listGameService.forEach((item) => {
    item.addEventListener("click", () => {
      listGameService.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });

  listGameService.forEach((item) => {
    item.addEventListener("click", () => {
      headerContentElementsService.forEach(function (element) {
        const targetIndex = item.getAttribute("data-target-service");
        document
          .querySelectorAll(".header-service__content")
          .forEach((container) => container.classList.remove("on"));

        const targetContainer = document.querySelector(
          `.header-service__content[data-index-service="${targetIndex}"]`
        );
        let bgTableElement = element.querySelector(".header-service__bg-table");

        let isActive = element.classList.contains("on");

        if (isActive) {
          bgTableElement.style.paddingTop = "";
        } else {
          let count = `${
            targetContainer.getAttribute("data-count") * 50 + 50
          }px`;
          bgTableElement.style.cssText = `padding-top:${count}`;
        }
      });

      listGameService.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");

      const targetIndex = item.getAttribute("data-target-service");
      document
        .querySelectorAll(".header-service__content")
        .forEach((container) => container.classList.remove("on"));

      const targetContainer = document.querySelector(
        `.header-service__content[data-index-service="${targetIndex}"]`
      );
      if (targetContainer) {
        targetContainer.classList.add("on");

        let count = `${targetContainer.getAttribute("data-count") * 50 + 50}px`;
        console.log(count);
        targetContainer.style.cssText = `padding-top:${count}`;
      }
    });
  });

  function checkScreenSize() {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      const listGame = document.querySelectorAll(".header-game__content"),
        listService = document.querySelectorAll(".header-service__content");
      let i = 0,
        j = 0;
      listGame.forEach((item) => {
        item.dataset.count = i;
        i++;
      });
      listService.forEach((item) => {
        item.dataset.count = j;
        j++;
      });
    }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});
