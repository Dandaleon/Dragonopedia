const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counter = document.querySelectorAll(".skills__counters-percent"),
  line = document.querySelectorAll(".skills__counters-filler");

counter.forEach((item, i) => {
  line[i].style.width = item.innerHTML;
});

$(document).ready(function () {
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        textarea: {
          required: true,
          minlength: 20,
        },
        agree: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Будь ласка, введіть своє ім'я",
          minlength: jQuery.validator.format("Введіть {0} символи!"),
        },
        email: {
          required: "Будь ласка, введіть свою пошту",
          email: "Неправильно введена адреса пошти",
        },
        textarea: {
          required: "Будь ласка, введіть ваше повідомлення",
          minlength: jQuery.validator.format("Введіть {0} символів!"),
        },
        agree: {
          required: "Будь ласка, ознайомтесь та підтвердіть, що ви згодні з нашою політикою конфеденційності",
        },
      },
    });
  }

  validateForms("#contacts-form");
});
