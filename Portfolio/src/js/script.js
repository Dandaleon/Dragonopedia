const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");
linkMenu = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

linkMenu.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
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

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $("form").submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    });
    $("form").trigger("reset");
    return false;
  });
});
