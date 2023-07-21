$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel/chevron-left-solid.png"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel/chevron-right-solid.png"></img></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
